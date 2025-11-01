import supabase from "../config/supabaseClient.js";

// Add new transaction (income or expense)
export const addTransaction = async (req, res) => {
    try {
        const { user_id, date, item, category, amount, payment_method, payment_provider, transaction_type } = req.body;

        // Validate required fields
        if (!user_id || !date || !item || !category || !amount || !transaction_type) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Insert into Supabase
        const { data, error } = await supabase
            .from("transactions")
            .insert([{ user_id, date, item, category, amount, payment_method, payment_provider, transaction_type }])
            .select();

        if (error) throw error;

        res.status(201).json({
            message: "Transaction added successfully",
            transaction: data[0]
        });

    } catch(err) {
        console.error("Error adding transaction:", err.message);
        res.status(500).json({ error: err.message });
    }
};

// Get all transactions (optional filter by user_id or date range)
export const getTransactions = async (req, res) => {
    try {
        const { user_id, startDate, endDate, type } = req.query;

        let query = supabase.from("transactions").select("*").order("date", { ascending: false });

        // Apply optional filters
        if (user_id) query = query.eq("user_id", user_id);
        if (type) query = query.eq("transaction_type", type);
        if (startDate && endDate)
        query = query.gte("date", startDate).lte("date", endDate);

        const { data, error } = await query;

        if (error) throw error;

        res.status(200).json({ count: data.length, transactions: data });

    } catch (err) {
        console.error("Error fetching transactions:", err.message);
        res.status(500).json({ error: err.message });
    }
};