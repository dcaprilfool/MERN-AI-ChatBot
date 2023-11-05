import { Router } from "express";
import userRoute from "./user-route.js";
import chatRoute from "./chat-route.js";

const appRouter = Router();

appRouter.use("/api/v1/user", userRoute);
appRouter.use("api/v1/chat", chatRoute);

export default appRouter;