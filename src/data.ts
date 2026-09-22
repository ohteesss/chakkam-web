import chatEdited from './assets/chat-a.jpg'
import chatReal from './assets/chat-b.jpg'

export const WHATSAPP_URL = 'https://wa.me/2349167065080?text=Hi%20Chakkam'

export const EXCUSES = [
  '“this is not our agreement”',
  '“sorry, I didn’t know that was what you meant”',
  '“I can’t remember you saying this”',
  '“I literally forgot”',
]

export type Round = {
  real: string
  fake: string
  tells: string[]
}

// Add a pair here to add a round to "spot the fake".
export const ROUNDS: Round[] = [
  {
    real: chatReal,
    fake: chatEdited,
    tells: [
      '₦98,500 minus ₦3,700 is not ₦61,500.',
      'The receipt inside the chat still says ₦9,850.',
      'A ₦350 “excess” on a ₦65,000 request makes no sense.',
    ],
  },
]

export const STEPS = [
  {
    title: 'Message Chakkam on WhatsApp',
    body: 'No sign up and no app. Just say hi.',
  },
  {
    title: 'Say the agreement your way',
    body: 'English or Pidgin. Chakkam asks for what’s missing: what, how much, by when, and their number.',
  },
  {
    title: 'They tap Confirm',
    body: 'You both get the same timestamped record. Neither of you can change it.',
  },
]

export const EXAMPLES = [
  {
    label: 'I lent a friend money',
    said: 'I borrow Ada 50k. She go pay 25k end of this month, 25k end of next month',
    record:
      'You lent ₦50,000 to Ada (+234 809 876 5432). Ada will pay back ₦25,000 by 30 September 2026 and ₦25,000 by 31 October 2026.',
  },
  {
    label: 'Buying from a friend',
    said: 'Kemi is making 2 hoodies for me, 36k. I’ve paid. She says next week Friday',
    record:
      'Kemi (+234 809 876 5432) is making 2 custom hoodies for you for ₦36,000, paid in full. Kemi will deliver by Friday, 2 October 2026.',
  },
  {
    label: 'A freelance gig',
    said: 'Dami wants a landing page. 1 million, 3 instalments, I finish before month end',
    record:
      'You will build a landing page for Dami (+234 809 876 5432) for ₦1,000,000, paid in 3 instalments. Work and payment to be completed by 30 September 2026.',
  },
  {
    label: 'A delivery',
    said: 'Musa is bringing my 10 bags of rice to Yaba on Wednesday. Delivery na 15k',
    record:
      'Musa (+234 809 876 5432) will deliver 10 bags of rice to you in Yaba by Wednesday, 23 September 2026, for a ₦15,000 delivery fee.',
  },
  {
    label: 'Splitting rent',
    said: 'Me and Chidi dey split rent, 600k each. He go send his own before 25th',
    record:
      'You and Chidi (+234 809 876 5432) are splitting ₦1,200,000 rent equally. Chidi will send ₦600,000 to you by 25 September 2026.',
  },
  {
    label: 'Aso ebi money',
    said: 'Ngozi paid me 45k for aso ebi. I’ll give her the fabric by 10th October',
    record:
      'You received ₦45,000 from Ngozi (+234 809 876 5432) for aso ebi. You will deliver the fabric by 10 October 2026.',
  },
]

export const NOTS = [
  {
    title: 'Not a contract',
    body: 'It shows what you both agreed to and when. It isn’t legally binding.',
  },
  {
    title: 'Not escrow',
    body: 'Chakkam never holds your money. Payment happens between the two of you.',
  },
  {
    title: 'Not a judge',
    body: 'It doesn’t pick sides. You both just have the same record to point to.',
  },
]

export const FAQS = [
  {
    q: 'Do I need to sign up?',
    a: 'No. There’s no account, no password and no form. If you have WhatsApp, you’re set.',
  },
  {
    q: 'Is there an app to download?',
    a: 'No. Chakkam lives inside WhatsApp. You just chat with it.',
  },
  {
    q: 'Is it really free?',
    a: 'Yes. Entirely free.',
  },
  {
    q: 'Does the other person need to do anything first?',
    a: 'No. They get a WhatsApp message from Chakkam with the agreement and two buttons: Confirm or Reject.',
  },
  {
    q: 'Is a Chakkam record legally binding?',
    a: 'No. It’s a record, not a contract. It shows what you both agreed to and when. For the heavy stuff, talk to a lawyer.',
  },
  {
    q: 'Does Chakkam hold money?',
    a: 'No. Chakkam never touches your money. Payment happens between the two of you.',
  },
  {
    q: 'Can a record be edited?',
    a: 'No. Once it’s recorded, neither of you can change it. If something changes, make a new one.',
  },
  {
    q: 'What if they reject it?',
    a: 'It’s recorded as rejected, and that can’t be changed either. Talk it over, then send a new one.',
  },
  {
    q: 'Can I see my old agreements?',
    a: 'Yes. Ask Chakkam to show your agreements and it lists them with their status.',
  },
  {
    q: 'What happens to my chats?',
    a: 'Your conversation with Chakkam is deleted once the chat session expires. The agreement records stay, so you can look them up later.',
  },
]
