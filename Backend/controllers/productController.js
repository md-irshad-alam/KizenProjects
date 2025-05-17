const Lead = require("../models/productsmodel");

exports.createLead = async (req, res) => {
  const { name, email, source, campaign } = req.body;
  try {
    const newLead = new Lead({
      name: name,
      email: email,
      source: source,
      campaign: campaign,
      channel: "Paid Ads",
      score: 85,
      status: "MQL",
      budgetSpent: 1.2,
    });
    await newLead.save();
    res.status(201).json(newLead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getLeads = async (req, res) => {
  const { startDate, endDate, campaign, source } = req.query;
  const filter = {};
  // Date Range Filtering
  if (startDate || endDate) {
    filter.createdAt = {};
    if (startDate) filter.createdAt.$gte = new Date(startDate);
    if (endDate) filter.createdAt.$lte = new Date(endDate);
  }

  // Campaign Filtering
  if (campaign) {
    filter.campaign = campaign;
  }

  // Source Filtering
  if (source) {
    filter.source = source;
  }

  try {
    const leads = await Lead.find(filter);
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// exports.getLeads = async (req, res) => {
//   const { startDate, endDate, campaign, source, minScore, maxScore } =
//     req.query;

//   const filter = {};

//   if (startDate || endDate) {
//     filter.createdAt = {};
//     if (startDate) filter.createdAt.$gte = new Date(startDate);
//     if (endDate) filter.createdAt.$lte = new Date(endDate);
//   }

//   if (source) filter.source = source;
//   if (campaign) filter.campaign = campaign;

//   if (minScore !== undefined || maxScore !== undefined) {
//     filter.score = {};
//     if (minScore) filter.score.$gte = parseInt(minScore);
//     if (maxScore) filter.score.$lte = parseInt(maxScore);
//   }

//   try {
//     const leads = await Lead.find(filter);
//     res.json(leads);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
