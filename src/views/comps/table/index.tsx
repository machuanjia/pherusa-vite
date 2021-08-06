import React, { Component, Fragment } from 'react';
import { Table, Input, Button, Tooltip, Modal } from 'antd';

import { ContentLayoutComponent } from 'pherusa-pro';
import { MODAL_SIZE } from 'pherusa-pro';
import TableCollecrtionComponent from './TableCollection';
import { listMixin } from 'pherusa-pro';
import { getUsers, getUserDetail, updateUser, deleteUser } from '@apis/index';
import type { IListMixin } from '@interfaces/mixin';
import {
  SettingOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import i18n from 'i18next';

type ITableState = unknown;

class TableView extends Component<IListMixin, ITableState> {
  init() {
    // console.log(this.props)
    return {
      fetchAction: getUsers,
      getDetailAction: getUserDetail,
      updateAction: updateUser,
      deleteAction: deleteUser,
    };
  }

  editAction(record) {
    this.props.editEntity(record._id);
  }

  deleteAction(record) {
    this.props.deleteEntity(record._id);
  }

  getTable() {
    const { data, loading, pagination, getRowKey } = this.props;
    const columns = [
      {
        title: i18n.t('list.name'),
        dataIndex: 'username',
        key: 'username',
        render: (text) => text,
      },
      {
        title: i18n.t('list.password'),
        dataIndex: 'password',
        key: 'password',
      },
      {
        title: i18n.t('list.address'),
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: i18n.t('list.operation'),
        key: 'action',
        width: 200,
        render: (text, record) => (
          <span>
            <span className="m-l-12 m-r-12 icon-action">
              <SettingOutlined /> {i18n.t('action.setting')}
            </span>
            <span className="m-l-12 m-r-12 icon-action">
              <Tooltip placement="top" title={i18n.t('action.edit')}>
                <EditOutlined onClick={this.editAction.bind(this, record)} />
              </Tooltip>
            </span>
            <span className="m-l-12 m-r-12 icon-action">
              <Tooltip placement="top" title={i18n.t('action.delete')}>
                <DeleteOutlined onClick={this.deleteAction.bind(this, record)} />
              </Tooltip>
            </span>
          </span>
        ),
      },
    ];

    return (
      <Table
        rowKey={getRowKey}
        pagination={pagination}
        loading={loading}
        bordered={true}
        columns={columns}
        dataSource={data}
      />
    );
  }

  render() {
    const {
      searchAction,
      isCollectionVisible,
      openCollection,
      closeCollection,
      collectionCallBack,
      entity,
    } = this.props;
    return (
      <ContentLayoutComponent>
        <Fragment key="left">
          <Input
            className="search"
            onKeyDown={searchAction}
            suffix={<SearchOutlined />}
            placeholder={i18n.t('list.search')}
          />
        </Fragment>
        <Fragment key="actions">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className={`${'action-btn'}`}
            onClick={openCollection}
          >
            {i18n.t('action.create')}
          </Button>
        </Fragment>
        <Fragment key="main">
          {this.getTable()}
          <Modal
            title={i18n.t('action.create')}
            visible={isCollectionVisible}
            width={MODAL_SIZE.md}
            destroyOnClose={true}
            footer={false}
            onCancel={closeCollection}
          >
            {
              // @ts-ignore
              <TableCollecrtionComponent entity={entity} callback={collectionCallBack} />
            }
          </Modal>
        </Fragment>
      </ContentLayoutComponent>
    );
  }
}
export default listMixin(TableView);
