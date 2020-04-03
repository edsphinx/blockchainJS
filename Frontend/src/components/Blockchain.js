import React, { useEffect } from "react";
import useFetch from "../useFetch";
import { Card, Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../redux/actions/fetchActions";
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Blockchain() {
  const data = useFetch("http://localhost:3000/blockchain");

  const dispatch = useDispatch();
  const fetch = useSelector(state => state.fetch);

  useEffect(() => {
    if (fetch.response != null) {
      toast.success(fetch.response.note);
      dispatch(reset());
    }

    if (fetch.refreshData) {
      data.doFetch();
    }
  }, [fetch.refreshData, fetch.response, fetch.error]);

  return (
    <>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={18} xl={18}>
          <Card
            title="Bloques"
            bordered={false}
            loading={data.isloading}
            style={{ paddingBottom: 10 }}
          >
            {data.result && (
              <>
                {data.result.chain.map((block, index) => (
                  <Card key={block.hash} style={{ marginBottom: 10 }}>
                    <p>
                      <strong>Hash: </strong> {block.hash}
                    </p>
                    <p>
                      <strong>Hash Anteriro: </strong> {block.previousBlockHash}
                    </p>
                    <p>
                      <strong>Fecha Minado: </strong>{" "}
                      {moment(block.timestamp).format("DD/MM/YYYY HH:mm:ss")}
                    </p>
                    <p>
                      <strong>Cantidad Transaciones: </strong>{" "}
                      {block.transactions.length}
                    </p>
                  </Card>
                ))}
              </>
            )}
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
          <Card
            title="Transacciones Pendientes"
            bordered={false}
            loading={data.isloading}
          >
            {data.result && (
              <>
                {data.result.pendingTransactions.map((block, index) => (
                  <Card key={index} style={{ marginBottom: 10 }}>
                    <p>
                      <strong>De: </strong> {block.sender}
                    </p>
                    <p>
                      <strong>Para: </strong> {block.recipient}
                    </p>
                    <p>
                      <strong>Cantidad: </strong> {block.amount}
                    </p>
                  </Card>
                ))}
              </>
            )}
          </Card>
        </Col>
      </Row>

      <ToastContainer
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
      />
    </>
  );
}
