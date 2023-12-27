const express = require("express");
const planController = require("../controllers/planController");
const planValidator = require("../validators/planValidator");

const router = express.Router();

router.post(
  "/create",
  planValidator.createPlanValidator,
  planController.createPlan
);
router.get("/getAll", planController.getAllPlans);
router.get("/:id", planController.getPlanById);
router.delete("/:id", planController.deletePlanById);
router.put(
  "/:id",
  planValidator.updatePlanValidator,
  planController.updatePlanById
);

module.exports = router;
