"use client";
import React from "react";
import { Table } from "antd";
import { userData } from "@/constants/data";
import CustomSearch from "./Search";

const columns = [
  // {
  //   title: "User ID",
  //   dataIndex: "_id",
  //   sorter: {
  //     compare: (a, b) => {
  //       debugger;
  //       return (
  //         a._id.split("").reverse().join("") -
  //         b._id.split("").reverse().join("")
  //       );
  //     },
  //   },
  //   render: (value) => value.slice(0, 10),
  // },
  {
    title: "User Name",
    dataIndex: "user_name",
    sorter: {
      compare: (a, b) => a.user_name.localeCompare(b.user_name),
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: {
      compare: (a, b) => a.email.localeCompare(b.email),
    },
  },
  {
    title: "Phone",
    dataIndex: "phone",
    sorter: {
      compare: (a, b) => a.phone.localeCompare(b.phone),
    },
  },
  {
    title: "Company",
    dataIndex: "company",
    sorter: {
      compare: (a, b) => a.company.localeCompare(b.company),
    },
  },
  {
    title: "LinkedIn Url",
    dataIndex: "linkedin_url",
    sorter: {
      compare: (a, b) => a.linkedin_url.localeCompare(b.linkedin_url),
    },
  },
];

const CustomTable = (props) => {
  const { dataSource } = props;
  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  const onSearch = () => {};

  return (
    <>
      <div className="flex justify-between items-center">
        <span>Total Users ({dataSource?.length || 0})</span>
        <CustomSearch onSearch={onSearch} />
      </div>
      <Table
        key={userData.map((user) => user.id)}
        columns={columns}
        dataSource={dataSource}
        onChange={onChange}
      />
    </>
  );
};

export default CustomTable;
