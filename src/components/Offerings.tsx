import React from 'react';

const Offerings = () => {
    const offerings = [
        { icon: '/pickup.svg', title: 'Free Delivery', description: 'from BDT 500' },
        { icon: '/star.svg', title: 'Best Quality', description: 'Brand' },
        { icon: '/timer.svg', title: '1 Year', description: 'for free return' },
        { icon: '/feedback.svg', title: 'Feedback', description: '99% Real Data' },
        { icon: '/payment.svg', title: 'Payment', description: 'Secure' },
    ];

    return (
        <div className="flex justify-between mb-24 mx-p-w px-p-w">
            {offerings.map((offering) => (
                <div key={offering.title} className="flex flex-col items-center">
                    <img src={offering.icon} alt={offering.title} />

                    <span className="mt-8 mb-2 text-xs font-semibold tracking-wide font-poppins">
                        {offering.title}
                    </span>

                    <span className="font-normal font-poppins" style={{ fontSize: 9 }}>
                        {offering.description}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Offerings;
