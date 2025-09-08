import { memo, useEffect, useState } from "react";
import { Table, Tag, Space, Button } from "antd";

interface ProductType {
    key: string;
    id: number;
    name: string;
    category: string;
    price: number;
    status: "available" | "out of stock";
    image: string;
}

const Product = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        setProducts([
            {
                key: "1",
                id: 1,
                name: "Nike Air Zoom",
                category: "Shoes",
                price: 120,
                status: "available",
                image: "https://picsum.photos/seed/p1/80/80",
            },
            {
                key: "2",
                id: 2,
                name: "Adidas Ultraboost",
                category: "Shoes",
                price: 150,
                status: "out of stock",
                image: "https://picsum.photos/seed/p2/80/80",
            },
            {
                key: "3",
                id: 3,
                name: "iPhone 14 Pro",
                category: "Electronics",
                price: 1200,
                status: "available",
                image: "https://picsum.photos/seed/p3/80/80",
            },
            {
                key: "4",
                id: 4,
                name: "Samsung Galaxy S23",
                category: "Electronics",
                price: 999,
                status: "available",
                image: "https://picsum.photos/seed/p4/80/80",
            },
            {
                key: "5",
                id: 5,
                name: "Levi’s Jeans",
                category: "Clothing",
                price: 70,
                status: "out of stock",
                image: "https://picsum.photos/seed/p5/80/80",
            },
        ]);
    }, []);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            width: 45,
            render: (id: number) => (
                <span className="font-mono font-semibold text-gray-700">{id}</span>
            ),
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            width: 100,
            render: (image: string) => (
                <div className="flex justify-center">
                    <img
                        src={image}
                        alt="product"
                        className="w-12 h-12 rounded-lg border border-gray-300 shadow-sm"
                    />
                </div>
            ),
        },
        {
            title: "Product Name",
            dataIndex: "name",
            key: "name",
            width: 220,
            render: (text: string) => (
                <span className="font-semibold text-gray-800">{text}</span>
            ),
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            width: 160,
            render: (category: string) => (
                <Tag
                    className="px-3 py-1 rounded-full text-sm"
                    color={
                        category === "Shoes"
                            ? "blue"
                            : category === "Electronics"
                                ? "purple"
                                : "geekblue"
                    }
                >
                    {category}
                </Tag>
            ),
        },
        {
            title: "Price ($)",
            dataIndex: "price",
            key: "price",
            width: 150,
            render: (price: number) => (
                <span className="text-green-600 font-medium">${price}</span>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 180,
            render: (status: string) => (
                <Tag
                    className="px-3 py-1 rounded-full text-sm"
                    color={status === "available" ? "green" : "volcano"}
                >
                    {status.toUpperCase()}
                </Tag>
            ),
        },
        {
            title: "Action",
            key: "action",
            width: 180,
            render: (_: any) => (
                <Space>
                    <Button type="link" className="text-blue-600 hover:text-blue-800">
                        Edit
                    </Button>
                    <Button type="link" danger className="hover:text-red-700">
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div className="p-2">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Product Management</h2>
            <Table
                columns={columns}
                dataSource={products}
                bordered
                tableLayout="fixed"
                pagination={{ pageSize: 5 }}
                rowClassName={(_, index) =>
                    index % 2 === 0
                        ? "bg-white hover:bg-gray-50 transition-colors"
                        : "bg-gray-50 hover:bg-gray-100 transition-colors"
                }
            />
        </div>
    );
};

export default memo(Product);
