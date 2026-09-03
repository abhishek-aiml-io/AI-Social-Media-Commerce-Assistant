import type { MarketingAsset } from '@/types';

export function generateAssets(productName: string): MarketingAsset[] {
  const name = productName || 'your product';

  return [
    {
      type: 'instagram',
      label: 'Instagram Caption',
      content: `✨ Meet ${name} — the upgrade your routine has been waiting for.\n\nDesigned for people who care about the details, it blends effortless style with real everyday utility. Swipe to see why it's selling out fast.\n\nTap the link in bio to shop. 🛍️\n\n#${name.replace(/\s+/g, '')} #NewArrival #MustHave #ShopNow #TrendingProduct #DailyEssentials #StyleUpgrade #LimitedStock`,
    },
    {
      type: 'linkedin',
      label: 'LinkedIn Post',
      content: `We're excited to introduce ${name}.\n\nAfter months of research and customer interviews, we built something that solves a real problem without the usual trade-offs. The result is a product that's as thoughtful in its design as it is reliable in its performance.\n\nEarly customers are already telling us it fits seamlessly into their workflow. We couldn't be prouder of the team behind it.\n\nNow available — link in the comments. I'd love to hear what you think.\n\n#ProductLaunch #Innovation #CustomerFirst`,
    },
    {
      type: 'email',
      label: 'Promotional Email',
      content: `Subject: ${name} is here — and you're invited to try it first\n\nHi there,\n\nWe just launched ${name}, and as one of our valued subscribers, you're getting early access before anyone else.\n\nHere's what makes it different:\n  • Designed around real customer feedback\n  • Built to last, not just to impress\n  • Backed by our 30-day guarantee\n\nFor a limited time, enjoy an exclusive launch discount when you order this week.\n\n[ Shop ${name} Now ]\n\nThanks for being part of the journey.\n\nThe Team`,
    },
  ];
}

const faqKnowledge: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['price', 'cost', 'how much', 'expensive', 'cheap'],
    answer:
      "Our pricing is tailored to each product. Most items range from $29 to $199 depending on features. You can find the exact price on the product page, and subscribers get an exclusive launch discount.",
  },
  {
    keywords: ['ship', 'delivery', 'arrive', 'shipping', 'how long'],
    answer:
      'We offer free standard shipping on orders over $50. Standard delivery takes 3-5 business days, and express shipping (1-2 days) is available at checkout. International shipping is supported in over 30 countries.',
  },
  {
    keywords: ['return', 'refund', 'money back', 'guarantee', 'warranty'],
    answer:
      'Every purchase is backed by our 30-day satisfaction guarantee. If it is not the right fit, return it for a full refund — no questions asked. Just initiate a return from your order history and we will send a prepaid label.',
  },
  {
    keywords: ['material', 'made of', 'quality', 'durable', 'build'],
    answer:
      'Our products are built with premium, sustainably sourced materials and tested for long-term durability. Full material specifications are listed on each product page under the Details tab.',
  },
  {
    keywords: ['size', 'fit', 'dimension', 'measure'],
    answer:
      'You can find a detailed sizing guide on each product page. If you are between sizes, we recommend sizing up for a more relaxed fit. Need help? Share your measurements and I will suggest the best option.',
  },
  {
    keywords: ['discount', 'promo', 'coupon', 'sale', 'offer', 'deal'],
    answer:
      'Yes! We run seasonal promotions and offer subscribers an exclusive launch discount. Sign up for our newsletter to get the current promo code, and check the homepage banner for active sales.',
  },
  {
    keywords: ['stock', 'available', 'sold out', 'restock', 'when'],
    answer:
      'Popular items do sell out quickly. If a product is out of stock, you can join the waitlist on its page and we will notify you the moment it is back. Restocks typically happen within 7-10 days.',
  },
  {
    keywords: ['contact', 'support', 'help', 'talk', 'human', 'agent'],
    answer:
      'I can help with most questions right here. For order-specific issues, reach our human support team at support@example.com or via the chat in your account — they respond within a few hours, Monday through Friday.',
  },
];

export function answerFaq(question: string): string {
  const q = question.toLowerCase();
  const match = faqKnowledge.find((entry) =>
    entry.keywords.some((k) => q.includes(k)),
  );
  if (match) return match.answer;
  return "Great question! I can help with pricing, shipping, returns, materials, sizing, discounts, and stock availability. Could you tell me a bit more about what you'd like to know about your product?";
}
