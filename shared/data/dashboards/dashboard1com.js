import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import {
  Breadcrumb,
  Col,
  Row,
  Card,
  Button,
  ProgressBar,
  Form,
} from 'react-bootstrap';
import Link from 'next/link';
import Select from 'react-select';
import * as Dashboarddata from './dashboards1';
import { COLUMNS, DATATABLE, GlobalFilter } from './dashboards1';

const Dashboard1com = () => {
  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: DATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const FormSize = [
    { value: '5', label: 'Show 5' },
    { value: '10', label: 'Show 10' },
    { value: '15', label: 'Show 15' },
  ];

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;
  return (
    <React.Fragment>
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">DASHBOARD</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb>
            <Breadcrumb.Item className=" tx-15" href="#!">
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item active aria-current="page">
              Sales
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <Row>
        <Col xxl={5} xl={12} lg={12} md={12} sm={12}>
          <Row>
            <Col xl={12} lg={12} md={12} xs={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col xl={9} lg={7} md={6} sm={12}>
                      <div className="text-justified align-items-center">
                        <h3 className="text-dark font-weight-semibold mb-2 mt-0">
                          Hi, Welcome Back{' '}
                          <span className="text-primary">Nick!</span>
                        </h3>
                        <p className="text-dark tx-14 mb-3 lh-3">
                          You have used the 85% of free plan storage. Please
                          upgrade your plan to get unlimited storage.
                        </p>
                        <Button variant="" className="btn btn-primary shadow">
                          Upgrade Now
                        </Button>
                      </div>
                    </Col>
                    <Col
                      xl={3}
                      lg={5}
                      md={6}
                      sm={12}
                      className="d-flex align-items-center justify-content-center upgrade-chart-circle"
                    >
                      <div className="chart-circle float-md-end mt-4 mt-md-0">
                        <ReactApexChart
                          options={Dashboarddata.Radialbar.options}
                          series={Dashboarddata.Radialbar.series}
                          type="radialBar"
                          height={180}
                        />
                        <div className="chart-circle-value circle-style">
                          <div className="tx-18 font-weight-semibold">85%</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={12} md={12} xs={12}>
              <Card className=" sales-card">
                <Row>
                  <div className="col-8">
                    <div className="ps-4 pt-4 pe-3 pb-4">
                      <div className="">
                        <h6 className="mb-2 tx-12 ">Today Orders</h6>
                      </div>
                      <div className="pb-0 mt-0">
                        <div className="d-flex">
                          <h4 className="tx-20 font-weight-semibold mb-2">
                            5,472
                          </h4>
                        </div>
                        <p className="mb-0 tx-12 text-muted">
                          Last week
                          <i className="fa fa-caret-up mx-2 text-success"></i>
                          <span className="text-success font-weight-semibold">
                            +427
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle-icon bg-primary-transparent text-center align-self-center overflow-hidden">
                      <i className="fe fe-shopping-bag tx-16 text-primary"></i>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
            <Col xl={6} lg={12} md={12} xs={12}>
              <Card className="sales-card">
                <Row>
                  <div className="col-8">
                    <div className="ps-4 pt-4 pe-3 pb-4">
                      <div className="">
                        <h6 className="mb-2 tx-12">Today Earnings</h6>
                      </div>
                      <div className="pb-0 mt-0">
                        <div className="d-flex">
                          <h4 className="tx-20 font-weight-semibold mb-2">
                            $47,589
                          </h4>
                        </div>
                        <p className="mb-0 tx-12 text-muted">
                          Last week
                          <i className="fa fa-caret-down mx-2 text-danger"></i>
                          <span className="font-weight-semibold text-danger">
                            -453
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle-icon bg-info-transparent text-center align-self-center overflow-hidden">
                      <i className="fe fe-dollar-sign tx-16 text-info"></i>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
            <Col xl={6} lg={12} md={12} xs={12}>
              <Card className=" sales-card">
                <Row>
                  <div className="col-8">
                    <div className="ps-4 pt-4 pe-3 pb-4">
                      <div className="">
                        <h6 className="mb-2 tx-12">Profit Gain</h6>
                      </div>
                      <div className="pb-0 mt-0">
                        <div className="d-flex">
                          <h4 className="tx-20 font-weight-semibold mb-2">
                            $8,943
                          </h4>
                        </div>
                        <p className="mb-0 tx-12 text-muted">
                          Last week
                          <i className="fa fa-caret-up mx-2 text-success"></i>
                          <span className=" text-success font-weight-semibold">
                            +788
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle-icon bg-secondary-transparent text-center align-self-center overflow-hidden">
                      <i className="fe fe-external-link tx-16 text-secondary"></i>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
            <Col xl={6} lg={12} md={12} xs={12}>
              <Card className="sales-card">
                <Row>
                  <div className="col-8">
                    <div className="ps-4 pt-4 pe-3 pb-4">
                      <div className="">
                        <h6 className="mb-2 tx-12">Total Earnings</h6>
                      </div>
                      <div className="pb-0 mt-0">
                        <div className="d-flex">
                          <h4 className="tx-22 font-weight-semibold mb-2">
                            $57.12M
                          </h4>
                        </div>
                        <p className="mb-0 tx-12  text-muted">
                          Last week
                          <i className="fa fa-caret-down mx-2 text-danger"></i>
                          <span className="text-danger font-weight-semibold">
                            -693
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle-icon bg-warning-transparent text-center align-self-center overflow-hidden">
                      <i className="fe fe-credit-card tx-16 text-warning"></i>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12}>
              <Card>
                <Card.Header className="pb-1">
                  <h3 className="card-title mb-2">Browser Usage</h3>
                </Card.Header>
                <Card.Body className=" p-0">
                  <div className="browser-stats">
                    <div className="d-flex align-items-center item  border-bottom my-2">
                      <div className="d-flex">
                        <img
                          src={'../../../assets/img/svgicons/chrome.svg'}
                          alt="img"
                          className="ht-30 wd-30 me-2"
                        />
                        <div className="">
                          <h6 className="">Chrome</h6>
                          <span className="text-muted tx-12">Google, Inc.</span>
                        </div>
                      </div>
                      <div className="ms-auto my-auto">
                        <div className="d-flex">
                          <span className="me-3 mt-1 font-weight-semibold tx-16">
                            35,502
                          </span>
                          <span className="text-success fs-13 my-auto">
                            <i className="fe fe-trending-up text-success mx-2 my-auto"></i>
                            12.75%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center item  border-bottom my-2">
                      <div className="d-flex">
                        <img
                          src={'../../../assets/img/svgicons/edge.svg'}
                          alt="img"
                          className="ht-30 wd-30 me-2"
                        />
                        <div className="">
                          <h6 className="">Edge</h6>
                          <span className="text-muted tx-12">
                            Microsoft Corporation, Inc.
                          </span>
                        </div>
                      </div>
                      <div className="ms-auto my-auto">
                        <div className="d-flex">
                          <span className="me-3 mt-1 font-weight-semibold tx-16">
                            25,364
                          </span>
                          <span className="text-success">
                            <i className="fe fe-trending-down text-danger mx-2 my-auto"></i>
                            24.37%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center item  border-bottom my-2">
                      <div className="d-flex">
                        <img
                          src={'../../../assets/img/svgicons/firefox.svg'}
                          alt="img"
                          className="ht-30 wd-30 me-2"
                        />
                        <div className="">
                          <h6 className="">Firefox</h6>
                          <span className="text-muted tx-12">
                            Mozilla Foundation, Inc.
                          </span>
                        </div>
                      </div>
                      <div className="ms-auto my-auto">
                        <div className="d-flex">
                          <span className="me-3 mt-1 font-weight-semibold tx-16">
                            14,635
                          </span>
                          <span className="text-success">
                            <i className="fe fe-trending-up text-success mx-2 my-auto"></i>
                            15,63%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center item  border-bottom my-2">
                      <div className="d-flex">
                        <img
                          src={'../../../assets/img/svgicons/safari.svg'}
                          alt="img"
                          className="ht-30 wd-30 me-2"
                        />
                        <div className="">
                          <h6 className="">Safari</h6>
                          <span className="text-muted tx-12">
                            Apple Corporation, Inc.
                          </span>
                        </div>
                      </div>
                      <div className="ms-auto my-auto">
                        <div className="d-flex">
                          <span className="me-3 mt-1 font-weight-semibold tx-16">
                            35,657
                          </span>
                          <span className="text-danger">
                            <i className="fe fe-trending-up text-success mx-2 my-auto"></i>
                            12.54%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center item my-2">
                      <div className="d-flex">
                        <img
                          src={'../../../assets/img/svgicons/opera.svg'}
                          alt="img"
                          className="ht-30 wd-30 me-2"
                        />
                        <div className="">
                          <h6 className="">Opera</h6>
                          <span className="text-muted tx-12">Opera, Inc.</span>
                        </div>
                      </div>
                      <div className="ms-auto my-auto">
                        <div className="d-flex">
                          <span className="me-3 mt-1 font-weight-semibold tx-16">
                            12,563
                          </span>
                          <span className="text-danger">
                            <i className="fe fe-trending-down text-danger mx-2 my-auto"></i>
                            15.12%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xxl={7} xl={12} lg={12} md={12} sm={12}>
          <Card className=" custom-card overflow-hidden">
            <Card.Header className=" border-bottom-0">
              <div>
                <h3 className="card-title mb-2 ">Project Budget</h3>
                <span className="d-block tx-12 mb-0 text-muted"></span>
              </div>
            </Card.Header>
            <Card.Body>
              {/* <div id="statistics1"> */}
              <Dashboarddata.Statistics1 />

              {/* </div> */}
            </Card.Body>
          </Card>
          <Row>
            <Col sm={12} lg={12} xl={6}>
              <Card className="card overflow-hidden">
                <Card.Header className=" pb-1">
                  <h3 className="card-title mb-2">Recent Customers</h3>
                </Card.Header>
                <Card.Body className="p-0 customers mt-1">
                  <div className="list-group list-lg-group list-group-flush">
                    <Link href="#!" className="border-0">
                      <div className="list-group-item list-group-item-action border-0">
                        <div className="media mt-0">
                          <img
                            className="avatar-lg rounded-circle me-3 my-auto shadow"
                            src={'../../../assets/img/faces/2.jpg'}
                            alt=""
                          />
                          <div className="media-body">
                            <div className="d-flex align-items-center">
                              <div className="mt-0">
                                <h5 className="mb-1 tx-13 font-weight-sembold text-dark">
                                  Samantha Melon
                                </h5>
                                <p className="mb-0 tx-12 text-muted">
                                  User ID: #1234
                                </p>
                              </div>
                              <span className="ms-auto wd-45p tx-14">
                                <span className="float-end badge badge-success-transparent">
                                  <span className="op-7 text-success font-weight-semibold">
                                    paid
                                  </span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="#!" className="border-0">
                      <div className="list-group-item list-group-item-action border-0">
                        <div className="media mt-0">
                          <img
                            className="avatar-lg rounded-circle me-3 my-auto shadow"
                            src={'../../../assets/img/faces/1.jpg'}
                            alt=""
                          />
                          <div className="media-body">
                            <div className="d-flex align-items-center">
                              <div className="mt-1">
                                <h5 className="mb-1 tx-13 font-weight-sembold text-dark">
                                  Allie Grater
                                </h5>
                                <p className="mb-0 tx-12 text-muted">
                                  User ID: #1234
                                </p>
                              </div>
                              <span className="ms-auto wd-45p tx-14">
                                <span className="float-end badge badge-danger-transparent ">
                                  <span className="op-7 text-danger font-weight-semibold">
                                    Pending
                                  </span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="#!" className="border-0">
                      <div className="list-group-item list-group-item-action border-0">
                        <div className="media mt-0">
                          <img
                            className="avatar-lg rounded-circle me-3 my-auto shadow"
                            src={'../../../assets/img/faces/5.jpg'}
                            alt=""
                          />
                          <div className="media-body">
                            <div className="d-flex align-items-center">
                              <div className="mt-1">
                                <h5 className="mb-1 tx-13 font-weight-sembold text-dark">
                                  Gabe Lackmen
                                </h5>
                                <p className="mb-0 tx-12 text-muted">
                                  User ID: #1234
                                </p>
                              </div>
                              <span className="ms-auto wd-45p  tx-14">
                                <span className="float-end badge badge-danger-transparent ">
                                  <span className="op-7 text-danger font-weight-semibold">
                                    Pending
                                  </span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="#!" className="border-0">
                      <div className="list-group-item list-group-item-action border-0">
                        <div className="media mt-0">
                          <img
                            className="avatar-lg rounded-circle me-3 my-auto shadow"
                            src={'../../../assets/img/faces/7.jpg'}
                            alt=""
                          />
                          <div className="media-body">
                            <div className="d-flex align-items-center">
                              <div className="mt-1">
                                <h5 className="mb-1 tx-13 font-weight-sembold text-dark">
                                  Manuel Labor
                                </h5>
                                <p className="mb-0 tx-12 text-muted">
                                  User ID: #1234
                                </p>
                              </div>
                              <span className="ms-auto wd-45p tx-14">
                                <span className="float-end badge badge-success-transparent ">
                                  <span className="op-7 text-success font-weight-semibold">
                                    Paid
                                  </span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="#!" className="border-0">
                      <div className="list-group-item list-group-item-action border-0">
                        <div className="media mt-0">
                          <img
                            className="avatar-lg rounded-circle me-3 my-auto shadow"
                            src={'../../../assets/img/faces/9.jpg'}
                            alt=""
                          />
                          <div className="media-body">
                            <div className="d-flex align-items-center">
                              <div className="mt-1">
                                <h5 className="mb-1 tx-13 font-weight-sembold text-dark">
                                  Hercules Bing
                                </h5>
                                <p className="mb-0 tx-12 text-muted">
                                  User ID: #1754
                                </p>
                              </div>
                              <span className="ms-auto wd-45p tx-14">
                                <span className="float-end badge badge-success-transparent ">
                                  <span className="op-7 text-success font-weight-semibold">
                                    Paid
                                  </span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="#!" className="border-0">
                      <div className="list-group-item list-group-item-action border-0">
                        <div className="media mt-0">
                          <img
                            className="avatar-lg rounded-circle me-3 my-auto shadow"
                            src={'../../../assets/img/faces/11.jpg'}
                            alt=""
                          />
                          <div className="media-body">
                            <div className="d-flex align-items-center">
                              <div className="mt-1">
                                <h5 className="mb-1 tx-13 font-weight-sembold text-dark">
                                  Manuel Labor
                                </h5>
                                <p className="mb-0 tx-12 text-muted">
                                  User ID: #1234
                                </p>
                              </div>
                              <span className="ms-auto wd-45p tx-14">
                                <span className="float-end badge badge-danger-transparent ">
                                  <span className="op-7 text-danger font-weight-semibold">
                                    Pending
                                  </span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={12} xl={6}>
              <Card>
                <Card.Header className="pb-3">
                  <h3 className="card-title mb-2">MAIN TASKS</h3>
                </Card.Header>
                <Card.Body className="p-0 customers mt-1">
                  <div className="">
                    <label className="p-2 d-flex">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="mx-3 my-auto">
                        accurate information at any given point.
                      </span>
                      <span className="ms-auto">
                        <span className="badge badge-primary-transparent font-weight-semibold px-2 py-1 tx-11 me-2">
                          Today
                        </span>
                      </span>
                    </label>
                    <label className="p-2 mt-2 d-flex">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="mx-3 my-auto">
                        sharing the information with clients or stakeholders.
                      </span>
                      <span className="ms-auto">
                        <span className="badge badge-primary-transparent font-weight-semibold px-2 py-1 tx-11 me-2">
                          Today
                        </span>
                      </span>
                    </label>
                    <label className="p-2 mt-2 d-flex">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="mx-3 my-auto">
                        Hearing the information and responding .
                      </span>
                      <span className="ms-auto">
                        <span className="badge badge-primary-transparent font-weight-semibold px-2 py-1 tx-11 me-2 float-end">
                          22 hrs
                        </span>
                      </span>
                    </label>
                    <label className="p-2 mt-2 d-flex">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="mx-3 my-auto">
                        Setting up and customizing your own sales.
                      </span>
                      <span className="ms-auto">
                        <span className="badge badge-light-transparent font-weight-semibold px-2 py-1 tx-11 me-2">
                          1 Day
                        </span>
                      </span>
                    </label>
                    <label className="p-2 mt-2 d-flex">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input defaultChecked="checked" type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="mx-3 my-auto">
                        To have a complete 360° overview of sales information,
                        having.
                      </span>
                      <span className="ms-auto">
                        <span className="badge badge-light-transparent font-weight-semibold px-2 py-1 tx-11 me-2">
                          2 Days
                        </span>
                      </span>
                    </label>
                    <label className="p-2 mt-2 d-flex">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input defaultChecked="checked" type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="mx-3 my-auto">New Admin Launched.</span>
                    </label>
                    <label className="p-2 mt-2 d-flex">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input defaultChecked="checked" type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="mx-3 my-auto mb-4">
                        To maximize profits and improve productivity.
                      </span>
                    </label>
                    <label className="p-2 mt-2 d-flex">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input defaultChecked="checked" type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="mx-3 my-auto mb-4">
                        To improve profits.
                      </span>
                    </label>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* <!-- </div> --> */}
      </Row>
      {/* <!-- row closed --> */}

      {/* <!-- row --> */}
      <Row className=" row-sm">
        <Col sm={12} lg={12} xl={6} xxl={3}>
          <Card>
            <Card.Header className=" pb-3">
              <h3 className="card-title mb-2">SALES ACTIVITY</h3>
            </Card.Header>
            <Card.Body className="p-0 customers mt-1">
              <div className="country-card pt-0">
                <div className="mb-4">
                  <div className="d-flex">
                    <span className="tx-13 font-weight-semibold">India</span>
                    <div className="ms-auto">
                      <span className="text-danger mx-1">
                        <i className="fe fe-trending-down"></i>
                      </span>
                      <span className="number-font">$32,879</span> (65%)
                    </div>
                  </div>
                  <div className="progress ht-8 br-5 mt-2">
                    <ProgressBar now={65} animated variant="primary" />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex mb-1">
                    <span className="tx-13 font-weight-semibold">Russia</span>
                    <div className="ms-auto">
                      <span className="text-info mx-1">
                        <i className="fe fe-trending-up"></i>
                      </span>
                      <span className="number-font">$22,710</span> (55%)
                    </div>
                  </div>
                  <div className="progress ht-8 br-5 mt-2">
                    <ProgressBar now={55} animated variant="info" />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex">
                    <span className="tx-13 font-weight-semibold">Canada</span>
                    <div className="ms-auto">
                      <span className="text-danger mx-1">
                        <i className="fe fe-trending-down"></i>
                      </span>
                      <span className="number-font">$56,291</span> (69%)
                    </div>
                  </div>
                  <div className="progress ht-8 br-5 mt-2">
                    <ProgressBar now={69} animated variant="secondary" />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex">
                    <span className="tx-13 font-weight-semibold">Brazil</span>
                    <div className="ms-auto">
                      <span className="text-success mx-1">
                        <i className="fe fe-trending-up"></i>
                      </span>
                      <span className="number-font">$34,209</span> (60%)
                    </div>
                  </div>
                  <div className="progress ht-8 br-5 mt-2">
                    <ProgressBar now={60} animated variant="warning" />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex">
                    <span className="tx-13 font-weight-semibold">
                      United States
                    </span>
                    <div className="ms-auto">
                      <span className="text-success mx-1">
                        <i className="fe fe-trending-up"></i>
                      </span>
                      <span className="number-font">$45,870</span> (86%)
                    </div>
                  </div>
                  <div className="progress ht-8 br-5 mt-2">
                    <ProgressBar now={80} animated variant="danger" />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex">
                    <span className="tx-13 font-weight-semibold">Germany</span>
                    <div className="ms-auto">
                      <span className="text-success mx-1">
                        <i className="fe fe-trending-up"></i>
                      </span>
                      <span className="number-font">$67,357</span> (73%)
                    </div>
                  </div>
                  <div className="progress ht-8 br-5 mt-2">
                    <ProgressBar animated variant="success" now={73} />
                  </div>
                </div>
                <div className="mb-0">
                  <div className="d-flex">
                    <span className="tx-13 font-weight-semibold">U.A.E</span>
                    <div className="ms-auto">
                      <span className="text-danger mx-1">
                        <i className="fe fe-trending-down"></i>
                      </span>
                      <span className="number-font">$56,291</span> (69%)
                    </div>
                  </div>
                  <div className="progress ht-8 br-5 mt-2">
                    <ProgressBar animated variant="purpple" now={69} />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} xxl={3} md={12} lg={12}>
          <Card className="overflow-hidden">
            <Card.Header className="pb-1">
              <div className="card-title mb-2">Warehouse Operating Costs</div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="list-group projects-list border-0">
                <Link
                  href="#!"
                  className="list-group-item list-group-item-action flex-column align-items-start border-0"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <p className="tx-13 mb-2 font-weight-semibold text-dark">
                      Order Picking
                    </p>
                    <h4 className="text-dark mb-0 font-weight-semibold text-dark tx-18">
                      3,876
                    </h4>
                  </div>
                  <div className="d-flex w-100 justify-content-between">
                    <span className="text-muted tx-12">
                      <i className="fa fa-caret-up text-success me-1"></i>
                      <span className="text-success">03%</span> last month
                    </span>
                    <span className="text-muted  tx-11">5 days ago</span>
                  </div>
                </Link>
                <Link
                  href="#!"
                  className="list-group-item list-group-item-action flex-column align-items-start border-bottom-0  border-start-0 border-end-0 border-top"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <p className="tx-13 mb-2 font-weight-semibold text-dark">
                      Storage
                    </p>
                    <h4 className="text-dark mb-0 font-weight-semibold text-dark tx-18">
                      2,178
                    </h4>
                  </div>
                  <div className="d-flex w-100 justify-content-between">
                    <span className="text-muted  tx-12">
                      <i className="fa fa-caret-down text-danger me-1"></i>
                      <span className="text-danger"> 16%</span> last month
                    </span>
                    <span className="text-muted  tx-11">2 days ago</span>
                  </div>
                </Link>
                <Link
                  href="#!"
                  className="list-group-item list-group-item-action flex-column align-items-start border-bottom-0  border-start-0 border-end-0 border-top"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <p className="tx-13 mb-2 font-weight-semibold text-dark">
                      Shipping
                    </p>
                    <h4 className="text-dark mb-0 font-weight-semibold text-dark tx-18">
                      1,367
                    </h4>
                  </div>
                  <div className="d-flex w-100 justify-content-between">
                    <span className="text-muted  tx-12">
                      <i className="fa fa-caret-up text-success me-1"></i>
                      <span className="text-success"> 06%</span> last month
                    </span>
                    <span className="text-muted  tx-11">1 days ago</span>
                  </div>
                </Link>
                <Link
                  href="#!"
                  className="list-group-item list-group-item-action flex-column align-items-start border-bottom-0  border-start-0 border-end-0 border-top"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <p className="tx-13 mb-2 font-weight-semibold text-dark">
                      Receiving
                    </p>
                    <h4 className="text-dark mb-0 font-weight-semibold text-dark tx-18">
                      678
                    </h4>
                  </div>
                  <div className="d-flex w-100 justify-content-between">
                    <span className="text-muted  tx-12">
                      <i className="fa fa-caret-down text-danger me-1"></i>
                      <span className="text-danger"> 25%</span> last month
                    </span>
                    <span className="text-muted  tx-11">10 days ago</span>
                  </div>
                </Link>
                <Link
                  href="#!"
                  className="list-group-item list-group-item-action flex-column align-items-start border-bottom-0  border-start-0 border-end-0 border-top"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <p className="tx-13 mb-2 font-weight-semibold text-dark">
                      Review
                    </p>
                    <h4 className="text-dark mb-0 font-weight-semibold text-dark tx-18">
                      578
                    </h4>
                  </div>
                  <div className="d-flex w-100 justify-content-between">
                    <span className="text-muted  tx-12">
                      <i className="fa fa-caret-up text-success me-1"></i>
                      <span className="text-success"> 55%</span> last month
                    </span>
                    <span className="text-muted  tx-11">11 days ago</span>
                  </div>
                </Link>
                <Link
                  href="#!"
                  className="list-group-item list-group-item-action flex-column align-items-start border-bottom-0  border-start-0 border-end-0 border-top mb-3"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <p className="tx-13 mb-2 font-weight-semibold text-dark">
                      Profit
                    </p>
                    <h4 className="text-dark mb-0 font-weight-semibold text-dark tx-18">
                      $27,215
                    </h4>
                  </div>
                  <div className="d-flex w-100 justify-content-between">
                    <span className="text-muted  tx-12">
                      <i className="fa fa-caret-up text-success me-1"></i>
                      <span className="text-success"> 32%</span> last month
                    </span>
                    <span className="text-muted  tx-11">11 days ago</span>
                  </div>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} xl={6} xxl={3}>
          <Card>
            <Card.Header className="bg-transparent pb-0">
              <div>
                <h3 className="card-title mb-2">Timeline</h3>
              </div>
            </Card.Header>
            <Card.Body className=" mt-0">
              <div className="latest-timeline mt-4">
                <ul className="timeline mb-0">
                  <li>
                    <div className="featured_icon danger">
                      <i className="fas fa-circle"></i>
                    </div>
                  </li>
                  <li className="mt-0 activity">
                    <div>
                      <span className="tx-11 text-muted float-end">
                        23 Sep, 2021
                      </span>
                    </div>
                    <Link href="#!" className="tx-12 text-dark">
                      <p className="mb-1 font-weight-semibold text-dark tx-13">
                        Anita Letterback
                      </p>
                    </Link>
                    <p className="text-muted mt-0 mb-0 tx-12">
                      Lorem ipsum dolor tempor incididunt .
                    </p>
                  </li>
                  <li>
                    <div className="featured_icon success">
                      <i className="fas fa-circle"></i>
                    </div>
                  </li>
                  <li className="mt-0 activity">
                    <div>
                      <span className="tx-11 text-muted float-end">
                        16 Aug, 2021
                      </span>
                    </div>
                    <Link href="#!" className="tx-12 text-dark">
                      <p className="mb-1 font-weight-semibold text-dark tx-13">
                        {`Paddy O'Furniture`}
                      </p>
                    </Link>
                    <p className="text-muted mt-0 mb-0 tx-12">
                      Lorem ipsum dolor tempor incididunt .
                    </p>
                  </li>
                  <li>
                    <div className="featured_icon primary">
                      <i className="fas fa-circle"></i>
                    </div>
                  </li>
                  <li className="mt-0 activity">
                    <div>
                      <span className="tx-11 text-muted float-end">
                        23 Feb, 2021
                      </span>
                    </div>
                    <Link href="#!" className="tx-12 text-dark">
                      <p className="mb-1 font-weight-semibold text-dark">
                        Olive Yew
                      </p>
                    </Link>
                    <p className="text-muted mt-0 mb-0 tx-12">
                      Lorem ipsum dolor tempor incididunt .
                    </p>
                  </li>
                  <li>
                    <div className="featured_icon warning">
                      <i className="fas fa-circle"></i>
                    </div>
                  </li>
                  <li className="mt-0 activity">
                    <div>
                      <span className="tx-11 text-muted float-end">
                        21 june, 2021
                      </span>
                    </div>
                    <Link href="#!" className="tx-12 text-dark">
                      <p className="mb-1 font-weight-semibold text-dark tx-13">
                        Maureen Biologist
                      </p>
                    </Link>
                    <p className="text-muted mt-0 mb-0 tx-12">
                      Lorem ipsum dolor tempor incididunt.
                    </p>
                  </li>
                  <li>
                    <div className="featured_icon teal">
                      <i className="fas fa-circle"></i>
                    </div>
                  </li>
                  <li className="mt-0 activity">
                    <div>
                      <span className="tx-11 text-muted float-end">
                        04 Aug, 2021
                      </span>
                    </div>
                    <Link href="#!" className="tx-12 text-dark">
                      <p className="mb-1 font-weight-semibold text-dark tx-13">
                        Peg Legge
                      </p>
                    </Link>
                    <p className="text-muted mt-0 mb-0 tx-12">
                      Lorem ipsum dolor tempor incididunt .
                    </p>
                  </li>
                  <li>
                    <div className="featured_icon info">
                      <i className="fas fa-circle"></i>
                    </div>
                  </li>
                  <li className="mt-0 activity">
                    <div>
                      <span className="tx-11 text-muted float-end">
                        04 Aug, 2021
                      </span>
                    </div>
                    <Link href="#!" className="tx-12 text-dark">
                      <p className="mb-1 font-weight-semibold text-dark tx-13">
                        Letterbac
                      </p>
                    </Link>
                    <p className="text-muted mt-0 mb-0 tx-12">
                      Lorem ipsum dolor tempor incididunt .
                    </p>
                  </li>
                  <li>
                    <div className="featured_icon danger">
                      <i className="fas fa-circle"></i>
                    </div>
                  </li>
                  <li className="mt-0 activity mb-2">
                    <div>
                      <span className="tx-11 text-muted float-end">
                        23 Sep, 2021
                      </span>
                    </div>
                    <Link href="#!" className="tx-12 text-dark">
                      <p className="mb-1 font-weight-semibold text-dark tx-13">
                        Anita Letterback
                      </p>
                    </Link>
                    <p className="text-muted mt-0 mb-0 tx-12">
                      Lorem ipsum dolor tempor incididunt .
                    </p>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} xxl={3} md={12} lg={12}>
          <Card>
            <Card.Header className="pb-0">
              <h3 className="card-title mb-2">Weekly Visitors</h3>
            </Card.Header>
            <Card.Body className="pb-0">
              <Row className=" mb-4">
                <div className="col-6">
                  <div className="text-muted tx-12 text-center mb-2">
                    Average Male Visitors
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="me-3 tx-26 font-weight-semibold">
                      2,132
                    </span>
                    <span className="text-success font-weight-semibold">
                      <i className="fa fa-caret-up me-2"></i>0.23%
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-muted tx-12 text-center mb-2">
                    Average Female Visitors
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="me-3 tx-26 font-weight-semibold">
                      1,053
                    </span>
                    <span className="text-danger font-weight-semibold">
                      <i className="fa fa-caret-down me-2"></i>0.11%
                    </span>
                  </div>
                </div>
              </Row>
              <Dashboarddata.Viewers />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- row closed --> */}

      {/* <!-- row  --> */}
      <Row>
        <Col sm={12} className="col-12">
          <Card>
            <Card.Header>
              <h4 className="card-title">Product Summary</h4>
            </Card.Header>
            <Card.Body className="pt-0 example1-table">
              <div className="table-responsive">
                <>
                  <div className="d-sm-flex">
                    <Form.Group className="mb-3">
                      <Select
                        classNamePrefix="selectform"
                        options={FormSize}
                        placeholder="Select"
                        onChange={(e) => setPageSize(Number(e.value))}
                      />
                    </Form.Group>
                    <GlobalFilter
                      filter={globalFilter}
                      setFilter={setGlobalFilter}
                    />
                  </div>
                  <table
                    {...getTableProps()}
                    className="table table-bordered text-nowrap mb-0"
                  >
                    <thead>
                      {headerGroups.map((headerGroup) => (
                        <tr
                          key={Math.random()}
                          {...headerGroup.getHeaderGroupProps()}
                        >
                          {headerGroup.headers.map((column) => (
                            <th
                              key={Math.random()}
                              {...column.getHeaderProps(
                                column.getSortByToggleProps(),
                              )}
                              className={column.className}
                            >
                              <span className="tabletitle">
                                {column.render('Header')}
                              </span>
                              <span>
                                {column.isSorted ? (
                                  column.isSortedDesc ? (
                                    <i className="fa fa-angle-down"></i>
                                  ) : (
                                    <i className="fa fa-angle-up"></i>
                                  )
                                ) : (
                                  ''
                                )}
                              </span>
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                      {page.map((row) => {
                        prepareRow(row);
                        return (
                          <tr
                            key={Math.random()}
                            className="text-center"
                            {...row.getRowProps()}
                          >
                            {row.cells.map((cell) => {
                              return (
                                <td
                                  key={Math.random()}
                                  {...cell.getCellProps()}
                                >
                                  {cell.render('Cell')}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="d-block d-sm-flex mt-4 ">
                    <span className="">
                      Page{' '}
                      <strong>
                        {pageIndex + 1} of {pageOptions.length}
                      </strong>{' '}
                    </span>
                    <span className="ms-sm-auto ">
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                      >
                        {' Previous '}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 my-1"
                        onClick={() => {
                          previousPage();
                        }}
                        disabled={!canPreviousPage}
                      >
                        {' << '}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 my-1"
                        onClick={() => {
                          previousPage();
                        }}
                        disabled={!canPreviousPage}
                      >
                        {' < '}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 my-1"
                        onClick={() => {
                          nextPage();
                        }}
                        disabled={!canNextPage}
                      >
                        {' > '}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 my-1"
                        onClick={() => {
                          nextPage();
                        }}
                        disabled={!canNextPage}
                      >
                        {' >> '}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                      >
                        {' Next '}
                      </Button>
                    </span>
                  </div>
                </>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Dashboard1com;
