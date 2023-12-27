const PlanData = require("../models/plandataModel");

exports.createPlanData = async (req, res) => {
  try {
    const newPlanData = new PlanData(req.body);
    await newPlanData.save();
    res.status(201).json(newPlanData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllPlanData = async (req, res) => {
  try {
    const planData = await PlanData.find();
    res.status(200).json(planData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPlanDataById = async (req, res) => {
  try {
    const planId = req.params.id;
    const planData = await PlanData.findById(planId);

    if (!planData) {
      return res.status(404).json({ error: "Plan data not found" });
    }

    res.json(planData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updatePlanDataById = async (req, res) => {
  try {
    const planId = req.params.id;
    const updatedPlanData = await PlanData.findByIdAndUpdate(planId, req.body, {
      new: true,
    });

    if (!updatedPlanData) {
      return res.status(404).json({ error: "Plan data not found" });
    }

    res.status(200).json(updatedPlanData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePlanDataById = async (req, res) => {
  try {
    const planId = req.params.id;
    const deletedPlanData = await PlanData.findByIdAndDelete(planId);

    if (!deletedPlanData) {
      return res.status(404).json({ error: "Plan data not found" });
    }

    res.status(200).json({ message: "Plan data deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
