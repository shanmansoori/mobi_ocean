import {
  GET_TOKEN_REQUEST,
  GET_DEVICE_COUNT_REQUEST,
  GET_DEVICE_DATA_REQUEST,
  GET_DEVICE_APP_DATA_REQUEST,
  GET_TICKET_COUNT_REQUEST,
  GET_TICKETS_REQUEST,
  GET_TICKET_TOP_ISSUES_REQUEST,
  GET_TICKET_LIST_REQUEST,
  GET_TICKET_DATA_REQUEST,
  SAVE_STATE,
} from "../constants/DashboardConstants";

export const getToken = () => {
  return {
    type: GET_TOKEN_REQUEST,
  };
};

export const getDeviceWiseCount = () => {
  return {
    type: GET_DEVICE_COUNT_REQUEST,
  };
};

export const getDeviceData = () => {
  return {
    type: GET_DEVICE_DATA_REQUEST,
  };
};

export const getDeviceAppData = () => {
  return {
    type: GET_DEVICE_APP_DATA_REQUEST,
  };
};

export const getTicketWiseCount = () => {
  return {
    type: GET_TICKET_COUNT_REQUEST,
  };
};

export const getTickets = () => {
  return {
    type: GET_TICKETS_REQUEST,
  };
};

export const getTicketTopIssues = () => {
  return {
    type: GET_TICKET_TOP_ISSUES_REQUEST,
  };
};

export const getTicketList = () => {
  return {
    type: GET_TICKET_LIST_REQUEST,
  };
};

export const getTicketData = () => {
  return {
    type: GET_TICKET_DATA_REQUEST,
  };
};

export const saveStateValue = (val) => {
  return {
    type: SAVE_STATE,
    val,
  };
};
