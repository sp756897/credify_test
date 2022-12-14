import React, { useEffect } from 'react';
import { Space, Table, Tag, Button, Input } from 'antd';
import { useSelector } from 'react-redux';
import BorrowModal from './Modals/BorrowModal';


export default function Borrow(provider) {

  const reserves = useSelector((state) => state.account.reserves)
  const creditScore = useSelector((state) => state.account.creditScore);

  const columns = [
    {
      title: 'Asset', //props.titles.asset
      dataIndex: 'asset',
      key: 'asset',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Annual Percentage Yield',
      dataIndex: 'apy',
      key: 'apy',
    },
    {
      title: '',
      dataIndex: 'amountInput',
      key: 'amountInput',
      render: (_, record) => (
        <Space size='middle'>
          <BorrowModal record={record} provider={provider} />
        </Space>
      )
    },
  ];

  const reservesList = []
  const data = reserves ? reserves.map((data, key) => {
    console.log("data: ", data.name)
    reservesList.push(
      {
        key: key,
        asset: data.name,
        apy: "10%",
        record: data
      })
  })
    : ""

  useEffect(() => {
    console.log("creditScore: ", creditScore)
  }, [creditScore])

  return (
    <div style={{ height: '82.5vh' }}>
      <h1 style={{ textAlign: 'center' }}>
        Credit Score: {creditScore}
      </h1>
      <h2 style={{ textAlign: 'center' }}>Borrow Asset Table</h2>
      <Table columns={columns} dataSource={reservesList} />
    </div>
  );
}
