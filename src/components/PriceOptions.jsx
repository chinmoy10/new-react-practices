import OptionPrice from "./OptionPrice";

const PriceOptions = () => {

    const priceOptions = [
        {
            id: 1,
            name: "Basic Plan",
            price: 1200,
            duration: "Monthly",
            features: [
                "Access to gym equipment",
                "Locker facility",
                "Free WiFi",
                "1 fitness assessment per month",
                "Access to cardio zone",
                "Mobile app access",
                "Basic workout plan",
                "Water station access",
                "Open gym hours (6 AM - 10 PM)"
            ]
        },
        {
            id: 2,
            name: "Standard Plan",
            price: 2000,
            duration: "Monthly",
            features: [
                "Access to gym equipment",
                "Locker & shower facility",
                "Free WiFi",
                "2 fitness assessments per month",
                "Group classes (Yoga, Cardio, Zumba)",
                "Access to cardio & strength zones",
                "Mobile app with progress tracking",
                "Basic diet tips",
                "Steam room access (limited)",
                "Open gym hours (5 AM - 11 PM)"
            ]
        },
        {
            id: 3,
            name: "Premium Plan",
            price: 3500,
            duration: "Monthly",
            features: [
                "Unlimited gym access",
                "Locker, shower & towel service",
                "Free WiFi",
                "Weekly fitness assessment",
                "All group classes included",
                "Diet consultation",
                "Access to sauna & steam room",
                "Advanced workout programs",
                "Supplement guidance",
                "Body composition analysis",
                "Priority class booking",
                "Extended hours access"
            ]
        },
        {
            id: 4,
            name: "Personal Training Plan",
            price: 6000,
            duration: "Monthly",
            features: [
                "Unlimited gym access",
                "Dedicated personal trainer",
                "Custom workout plan",
                "Diet & nutrition guide",
                "Priority support",
                "Weekly progress tracking",
                "1-on-1 training sessions (12/month)",
                "Injury prevention guidance",
                "Form correction & coaching",
                "Access to all facilities",
                "Private consultation sessions",
                "Flexible workout schedule"
            ]
        },
        {
            id: 5,
            name: "Annual VIP Plan",
            price: 30000,
            duration: "Yearly",
            features: [
                "All Premium features",
                "Personal trainer (8 sessions/month)",
                "Free gym merchandise",
                "Priority booking for classes",
                "Guest pass (2 per month)",
                "24/7 gym access",
                "VIP lounge access",
                "Free health checkup (quarterly)",
                "Exclusive workshops & events",
                "Nutritionist support",
                "Discounts on supplements",
                "Dedicated customer support"
            ]
        }
    ];

    return (
        <div className="m-5">
            <h2 className="text-5xl pb-5">Best Prices in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <OptionPrice key={option.id} option={option}></OptionPrice>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;