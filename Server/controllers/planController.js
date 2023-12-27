const Plan = require("../models/planModel");

exports.getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.status(200).json(plans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPlanById = async (req, res) => {
  try {
    const planId = req.params.id;
    const plan = await Plan.findById(planId);

    if (!plan) {
      return res.status(404).json({ error: "Plan not found" });
    }

    res.json(plan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createPlan = async (req, res) => {
  try {
    const newPlan = new Plan(req.body);
    await newPlan.save();
    res.status(201).json(newPlan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updatePlanById = async (req, res) => {
  try {
    const planId = req.params.id;
    const updatedPlan = await Plan.findByIdAndUpdate(planId, req.body, {
      new: true,
    });

    if (!updatedPlan) {
      return res.status(404).json({ error: "Plan not found" });
    }

    res.status(200).json(updatedPlan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePlanById = async (req, res) => {
  try {
    const planId = req.params.id;
    const deletedPlan = await Plan.findByIdAndDelete(planId);

    if (!deletedPlan) {
      return res.status(404).json({ error: "Plan not found" });
    }

    res.status(200).json({ message: "Plan deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
