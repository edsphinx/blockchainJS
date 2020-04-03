import React from "react";
import { Form, Button, Input, InputNumber, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest } from "../redux/actions/fetchActions";

export default function CreateTransaction(props) {
  const { wallet } = props;
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };

  const onFinish = values => {
    var data = {
      amount: values.amount,
      sender: wallet,
      recipient: values.recipient
    };

    dispatch(
      fetchRequest(`http://localhost:3000/transaction`, data, {}, "POST")
    );
    form.resetFields();
  };

  return (
    <>
      <Form {...layout} onFinish={onFinish} form={form}>
        <Form.Item
          label="Cantidad"
          name="amount"
          rules={[{ required: true, message: "Campo Requerido" }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Direccion"
          name="recipient"
          rules={[{ required: true, message: "Campo Requerido" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
