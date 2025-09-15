import { Button, Input } from 'antd';
import { memo, useState, type FC } from 'react';
import { Form } from 'antd';

const UpdForm:FC<any> = ({open}) => {

    const [form, setForm] = useState<any[]>([])

    const onFinish = (values: any) => {
        console.log(values);
        
    }

    return (
        <div className="">
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label="Title" name="title" rules={[{ required: true }]}>
                    <Input placeholder="Enter product title" />
                </Form.Item>
                <Form.Item label="Title" name="title" rules={[{ required: true }]}>
                    <Input placeholder="Enter product title" />
                </Form.Item>


                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full"
                    >
                        Add Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default memo(UpdForm);