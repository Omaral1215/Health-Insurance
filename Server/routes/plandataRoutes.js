const express = require("express");
const planDataController = require("../controllers/plandataController");
const planDataValidator = require("../validators/plandataValidator");

const router = express.Router();

router.post(
  "/create",
  planDataValidator.createPlanDataValidator,
  planDataController.createPlanData
);
router.get("/getAll", planDataController.getAllPlanData);
router.get("/:id", planDataController.getPlanDataById);
router.delete("/:id", planDataController.deletePlanDataById);
router.put(
  "/:id",
  planDataValidator.createPlanDataValidator,
  planDataController.updatePlanDataById
);

module.exports = router;
