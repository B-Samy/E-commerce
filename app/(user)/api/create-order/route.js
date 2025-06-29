import Razorpay from "razorpay";

export async function POST(req) {
  try {
    const { amount } = await req.json(); // in rupees

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const payment_capture = 1;
    const currency = "INR";
    const options = {
      amount: Math.round(amount * 100), // in paise
      currency,
      receipt: `receipt_order_${Math.floor(Math.random() * 1000000)}`,
      payment_capture,
    };

    const order = await razorpay.orders.create(options);

    return Response.json({ orderId: order.id });
  } catch (err) {
    console.error("Error creating Razorpay order:", err);
    return new Response(JSON.stringify({ error: "Failed to create order" }), {
      status: 500,
    });
  }
}
