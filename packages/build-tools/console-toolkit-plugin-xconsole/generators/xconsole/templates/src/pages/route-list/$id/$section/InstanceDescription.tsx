import React from 'react';
import PropTypes from 'prop-types';

import { intl } from '@ali/xconsole';
import { Button, Description, DateTime } from '@ali/xconsole/ui';
import { useOpenApi } from '@ali/xconsole/hooks';

const InstanceDescription = ({ instanceId }) => {
  const { data, loading } = useOpenApi('wind-demo', 'DescribeInstance', {instanceId});

  return (
    <Description
      title={intl('info.instance')}
      dataSource={data}
      items={[
        {
          dataIndex: 'InstanceId',
          label: intl('instance.prop.id.label'),
        },
        {
          dataIndex: 'InstanceName',
          label: intl('instance.prop.name.label'),
        },
        {
          dataIndex: 'Address',
          label: intl('instance.prop.address.label'),
        },
        {
          dataIndex: 'CreateTime',
          label: intl('instance.prop.create_time.label'),
          render: value => (<DateTime value={value} />),
        },
      ]}
      // @ts-ignore
      operation={(
        <Button text type="primary">
          {intl('instance.update')}
        </Button>
      )}
    />
  )
}

export default InstanceDescription;