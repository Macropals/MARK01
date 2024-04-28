
import React, { Component } from "react";
import { Table } from "react-bootstrap";
import NewDeviceModal from "./NewDeviceModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class DevicesList extends Component {
  render() {
    const devices = this.props.devices;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Floor</th>
            <th>X</th>
            <th>Y</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {!devices || devices.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            devices.map(device => (
              <tr key={device.id}>
                <td>{device.type}</td>
                <td>{device.floor}</td>
                <td>{device.x}</td>
                <td>{device.y}</td>
                <td>{device.x_extent}</td>
                <td>{device.y_extent}</td>
                <td align="center">
                  <NewDeviceModal
                    create={false}
                    device={device}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    id={device.id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default DevicesList;