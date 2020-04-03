import React, { useState, useEffect } from "react";
import "./App.css";
import useFetch from "./useFetch";
import { Layout, Col, Row, Button, Modal } from "antd";
import Blockchain from "./components/Blockchain";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest, reset } from "./redux/actions/fetchActions";
import CreateTransaction from "./components/CreateTransaction";
const { Content } = Layout;

function App() {
  const data = useFetch("http://localhost:3000/");
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const fetch = useSelector(state => state.fetch);

  useEffect(() => {
    if (fetch.response != null) {
      setVisible(false);
    }
  }, [fetch.response]);

  return (
    <>
      <Layout>
        <Content style={{ padding: "0 50px" }}>
          <div>
            <h1 className="text-center">
              Bienvenido ejemplo de blockchain en JS
            </h1>
          </div>
          {data.result != null && (
            <h3>Su direccion de cartera es: {data.result}</h3>
          )}
          <Row>
            <Button
              type="primary"
              style={{ marginBottom: 10, marginRight: 10 }}
              onClick={() => {
                dispatch(reset());
                setVisible(true);
              }}
            >
              Nueva Transaccion
            </Button>
            <Button
              type="primary"
              style={{ marginBottom: 10 }}
              onClick={() => {
                dispatch(
                  fetchRequest(`http://localhost:3000/mine`, {}, {}, "GET")
                );
              }}
            >
              Minar Bloque
            </Button>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Blockchain />
            </Col>
          </Row>
        </Content>
        <Modal
          title="Nueva transaccion"
          onCancel={() => {
            setVisible(false);
          }}
          visible={visible}
          footer={[
            <Button key="back" onClick={() => setVisible(false)}>
              Regresar
            </Button>
          ]}
        >
          {data.result != null && <CreateTransaction wallet={data.result} />}
        </Modal>
      </Layout>
    </>
  );
}

export default App;
