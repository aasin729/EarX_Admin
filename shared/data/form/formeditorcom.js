import React from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';
import { Wrappers } from '../form/Wrapper';
import { FromInlineEditEditor } from '../form/InlineEditeditor';
import { LargeModaleditor } from '../form/ModalEditor';
import { FormEditorstyle1 } from '../form/BasicEditor';

const FormEditorCom = () => {
  return (
    <div className="main-container container-fluid">
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">
            FORM EDITOR
          </span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#!">
              Forms
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Form Editor
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- Row --> */}
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Summernote Editor</h3>
            </Card.Header>
            <Card.Body>
              <Wrappers />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End Row--> */}

      {/* <!-- Row --> */}
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Wysiwyag Form Editor</h3>
            </Card.Header>
            <Card.Body>
              <FormEditorstyle1 />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End Row--> */}

      {/* <!-- Row --> */}
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header className="border-bottom-0">
              <Card.Title className="card-title">
                Form Editor in Modal
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <LargeModaleditor />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /Row --> */}

      {/* <!-- Row --> */}
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header className="border-bottom-0">
              <Card.Title className="card-title">
                From Inline-Edit Editor
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="wd-xl-100p ht-sm-350">
                <div
                  className="ql-scrolling-demo p-4 border"
                  id="scrolling-container"
                >
                  <FromInlineEditEditor />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /Row --> */}
    </div>
  );
};

export default FormEditorCom;
