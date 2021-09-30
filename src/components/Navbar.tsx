import Link from 'next/link';

const Navbar = () => {
    const categories = [
        'All Categories',
        'Accessories',
        'Smartphone',
        'Computer',
        'Gaming Equipment',
        'TV & Monitors',
        'Headphones',
        'Speaker',
        'HOT DEALS',
    ];

    return (
        <div
            style={{
                paddingBottom: 10,
                paddingTop: 10,
                fontSize: 10,
                boxShadow: '0 10px 12px rgba(0,0,0,0.24)',
            }}
            className="flex justify-between px-p-w"
        >
            {categories.map((category) => (
                <span
                    key={category}
                    className="font-normal tracking-wider cursor-pointer text-bg-primary"
                >
                    <Link href={category.toLowerCase().replace(' ', '-')}>{category}</Link>
                </span>
            ))}
        </div>
    );
};

export default Navbar;
