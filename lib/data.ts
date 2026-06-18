export const bankData = {
  bankName: "JASON Beghe Bank",
  customer: "Jason Beghe",
  savings: {
    accountNumber: "1023456789",
    balance: 12500000,
  },
  checking: {
    accountNumber: "1023456790",
    balance: 10850000,
  },
  availableBalance: 23350000,
  transactions: [
    {
      id: 1,
      date: "2026-06-15",
      description: "Salary Deposit",
      amount: 5000000,
      type: "credit",
    },
    {
      id: 2,
      date: "2026-06-14",
      description: "Wire Transfer",
      amount: -250000,
      type: "debit",
    },
  ],
};
