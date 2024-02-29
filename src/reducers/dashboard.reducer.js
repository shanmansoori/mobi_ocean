import {
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_ERROR,
  GET_DEVICE_COUNT_REQUEST,
  GET_DEVICE_COUNT_SUCCESS,
  GET_DEVICE_COUNT_ERROR,
  GET_DEVICE_DATA_REQUEST,
  GET_DEVICE_DATA_SUCCESS,
  GET_DEVICE_DATA_ERROR,
  GET_DEVICE_APP_DATA_REQUEST,
  GET_DEVICE_APP_DATA_SUCCESS,
  GET_DEVICE_APP_DATA_ERROR,
  GET_TICKET_COUNT_REQUEST,
  GET_TICKET_COUNT_SUCCESS,
  GET_TICKET_COUNT_ERROR,
  GET_TICKETS_REQUEST,
  GET_TICKETS_SUCCESS,
  GET_TICKETS_ERROR,
  GET_TICKET_LIST_REQUEST,
  GET_TICKET_LIST_SUCCESS,
  GET_TICKET_LIST_ERROR,
  GET_TICKET_TOP_ISSUES_REQUEST,
  GET_TICKET_TOP_ISSUES_SUCCESS,
  GET_TICKET_TOP_ISSUES_ERROR,
  GET_TICKET_DATA_REQUEST,
  GET_TICKET_DATA_SUCCESS,
  GET_TICKET_DATA_ERROR,
  SAVE_STATE,
} from "../constants/DashboardConstants";

const initialState = {
  loading: false,
  tokenSuccess: "",
  tokenError: "",
  deviceCount: "",
  deviceCountError: "",
  deviceData: "",
  deviceDataError: "",
  deviceAppData: "",
  deviceAppDataError: "",
  ticketCount: "",
  ticketCountError: "",
  tickets: "",
  ticketsError: "",
  ticketTopIssues: "",
  ticketTopIssuesError: "",
  ticketList: "",
  ticketListError: "",
  ticketData: "",
  ticketDataError: "",
  stateValue: "",
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN_REQUEST:
      return {
        ...state,
      };
    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        tokenSuccess: action.msg,
      };
    case GET_TOKEN_ERROR:
      return {
        ...state,
        tokenError: action.error,
      };
    case GET_DEVICE_COUNT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DEVICE_COUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        deviceCount: action.data,
      };
    case GET_DEVICE_COUNT_ERROR:
      return {
        ...state,
        loading: false,
        deviceCountError: action.error,
      };
    case GET_DEVICE_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DEVICE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        deviceData: action.data,
      };
    case GET_DEVICE_DATA_ERROR:
      return {
        ...state,
        loading: false,
        deviceDataError: action.error,
      };
    case GET_DEVICE_APP_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DEVICE_APP_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        deviceAppData: action.data,
      };
    case GET_DEVICE_APP_DATA_ERROR:
      return {
        ...state,
        loading: false,
        deviceAppDataError: action.error,
      };
    case GET_TICKET_COUNT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TICKET_COUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        ticketCount: action.data,
      };
    case GET_TICKET_COUNT_ERROR:
      return {
        ...state,
        loading: false,
        ticketCountError: action.error,
      };
    case GET_TICKETS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TICKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        tickets: action.data,
      };
    case GET_TICKETS_ERROR:
      return {
        ...state,
        loading: false,
        ticketsError: action.error,
      };
    case GET_TICKET_TOP_ISSUES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TICKET_TOP_ISSUES_SUCCESS:
      return {
        ...state,
        loading: false,
        ticketTopIssues: action.data,
      };
    case GET_TICKET_TOP_ISSUES_ERROR:
      return {
        ...state,
        loading: false,
        ticketTopIssuesError: action.error,
      };
    case GET_TICKET_LIST_REQUEST:
      return {
        ...state,
      };
    case GET_TICKET_LIST_SUCCESS:
      return {
        ...state,
        ticketList: action.data,
      };
    case GET_TICKET_LIST_ERROR:
      return {
        ...state,
        ticketListError: action.error,
      };
    case GET_TICKET_DATA_REQUEST:
      return {
        ...state,
      };
    case GET_TICKET_DATA_SUCCESS:
      return {
        ...state,
        ticketData: action.data,
      };
    case GET_TICKET_DATA_ERROR:
      return {
        ...state,
        ticketDataError: action.error,
      };
    case SAVE_STATE:
      return {
        ...state,
        stateValue: action.val,
      };
    default:
      return state;
  }
};

export default dashboard;
