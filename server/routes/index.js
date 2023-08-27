import express from 'express';
import authRoutes from './auth';
import propertyRoutes from './property';
import verificationRoutes from './verification';



const app = express();

app.use('/auth', authRoutes);
app.use('/property', propertyRoutes);
app.use('/verification', verificationRoutes)
// app.use('/bank', bankRoutes);
// app.use('/document', documentRoutes);
// app.use('/transaction', transactionRoutes);
// app.use('/subscription', subscriptionRoutes);
// app.use('/investmentPlan', investmentPlanRoutes);
// app.use('/investment', investmentRoutes);
// app.use('/wallet', walletRoutes);
// app.use('/withdraw', withdrawalRoutes);
// app.use('/safe', safeRoutes);

export default app;
// module.exports = app;

