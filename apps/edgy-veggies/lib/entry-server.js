'use strict';

const web = require('solid-js/web');
const express = require('express');
const path = require('path');
const url = require('url');
const solidJs = require('solid-js');

const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

const express__default = /*#__PURE__*/_interopDefaultLegacy(express);

class ApiError extends Error {
  url;
  status;
  statusText;
  body;
  request;
  constructor(request, response, message) {
    super(message);
    this.name = "ApiError";
    this.url = response.url;
    this.status = response.status;
    this.statusText = response.statusText;
    this.body = response.body;
    this.request = request;
  }
}

class CancelError extends Error {
  constructor(message) {
    super(message);
    this.name = "CancelError";
  }
  get isCancelled() {
    return true;
  }
}
class CancelablePromise {
  [Symbol.toStringTag];
  _isResolved;
  _isRejected;
  _isCancelled;
  _cancelHandlers;
  _promise;
  _resolve;
  _reject;
  constructor(executor) {
    this._isResolved = false;
    this._isRejected = false;
    this._isCancelled = false;
    this._cancelHandlers = [];
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
      const onResolve = (value) => {
        if (this._isResolved || this._isRejected || this._isCancelled) {
          return;
        }
        this._isResolved = true;
        this._resolve?.(value);
      };
      const onReject = (reason) => {
        if (this._isResolved || this._isRejected || this._isCancelled) {
          return;
        }
        this._isRejected = true;
        this._reject?.(reason);
      };
      const onCancel = (cancelHandler) => {
        if (this._isResolved || this._isRejected || this._isCancelled) {
          return;
        }
        this._cancelHandlers.push(cancelHandler);
      };
      Object.defineProperty(onCancel, "isResolved", {
        get: () => this._isResolved
      });
      Object.defineProperty(onCancel, "isRejected", {
        get: () => this._isRejected
      });
      Object.defineProperty(onCancel, "isCancelled", {
        get: () => this._isCancelled
      });
      return executor(onResolve, onReject, onCancel);
    });
  }
  then(onFulfilled, onRejected) {
    return this._promise.then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    return this._promise.catch(onRejected);
  }
  finally(onFinally) {
    return this._promise.finally(onFinally);
  }
  cancel() {
    if (this._isResolved || this._isRejected || this._isCancelled) {
      return;
    }
    this._isCancelled = true;
    if (this._cancelHandlers.length) {
      try {
        for (const cancelHandler of this._cancelHandlers) {
          cancelHandler();
        }
      } catch (error) {
        console.warn("Cancellation threw an error", error);
        return;
      }
    }
    this._cancelHandlers.length = 0;
    this._reject?.(new CancelError("Request aborted"));
  }
  get isCancelled() {
    return this._isCancelled;
  }
}

const OpenAPI = {
  BASE: "https://sandbox.dev.clover.com",
  VERSION: "3.0",
  WITH_CREDENTIALS: false,
  CREDENTIALS: "include",
  TOKEN: void 0,
  USERNAME: void 0,
  PASSWORD: void 0,
  HEADERS: void 0,
  ENCODE_PATH: void 0
};

var AdditionalCharge;
((AdditionalCharge2) => {
  ((type2) => {
    type2["DELIVERY_FEE"] = "DELIVERY_FEE";
  })(AdditionalCharge2.type || (AdditionalCharge2.type = {}));
})(AdditionalCharge || (AdditionalCharge = {}));

var AdditionalChargeAmount;
((AdditionalChargeAmount2) => {
  ((type2) => {
    type2["INTERAC"] = "INTERAC";
    type2["CREDIT_SURCHARGE"] = "CREDIT_SURCHARGE";
    type2["CONVENIENCE_FEE"] = "CONVENIENCE_FEE";
    type2["INTERAC_V2"] = "INTERAC_V2";
    type2["DELIVERY_FEE"] = "DELIVERY_FEE";
  })(AdditionalChargeAmount2.type || (AdditionalChargeAmount2.type = {}));
})(AdditionalChargeAmount || (AdditionalChargeAmount = {}));

var AdditionalChargeSummary;
((AdditionalChargeSummary2) => {
  ((type2) => {
    type2["DELIVERY_FEE"] = "DELIVERY_FEE";
  })(AdditionalChargeSummary2.type || (AdditionalChargeSummary2.type = {}));
})(AdditionalChargeSummary || (AdditionalChargeSummary = {}));

var AppBillingInfo;
((AppBillingInfo2) => {
  ((status2) => {
    status2["ACTIVE"] = "ACTIVE";
    status2["INACTIVE"] = "INACTIVE";
    status2["LAPSED"] = "LAPSED";
    status2["SUPPRESSED"] = "SUPPRESSED";
  })(AppBillingInfo2.status || (AppBillingInfo2.status = {}));
})(AppBillingInfo || (AppBillingInfo = {}));

var Authorization;
((Authorization2) => {
  ((cardType2) => {
    cardType2["VISA"] = "VISA";
    cardType2["MC"] = "MC";
    cardType2["AMEX"] = "AMEX";
    cardType2["DISCOVER"] = "DISCOVER";
    cardType2["DINERS_CLUB"] = "DINERS_CLUB";
    cardType2["JCB"] = "JCB";
    cardType2["MAESTRO"] = "MAESTRO";
    cardType2["SOLO"] = "SOLO";
    cardType2["LASER"] = "LASER";
    cardType2["CHINA_UNION_PAY"] = "CHINA_UNION_PAY";
    cardType2["CARTE_BLANCHE"] = "CARTE_BLANCHE";
    cardType2["UNKNOWN"] = "UNKNOWN";
    cardType2["GIFT_CARD"] = "GIFT_CARD";
    cardType2["EBT"] = "EBT";
    cardType2["GIROCARD"] = "GIROCARD";
    cardType2["INTERAC"] = "INTERAC";
    cardType2["OTHER"] = "OTHER";
    cardType2["RUPAY"] = "RUPAY";
  })(Authorization2.cardType || (Authorization2.cardType = {}));
  ((type2) => {
    type2["TAB"] = "TAB";
    type2["AUTH"] = "AUTH";
  })(Authorization2.type || (Authorization2.type = {}));
})(Authorization || (Authorization = {}));

var Card$1;
((Card2) => {
  ((tokenType2) => {
    tokenType2["MULTIPAY"] = "MULTIPAY";
    tokenType2["FINANCIAL"] = "FINANCIAL";
    tokenType2["CTOKEN"] = "CTOKEN";
  })(Card2.tokenType || (Card2.tokenType = {}));
})(Card$1 || (Card$1 = {}));

var CardTransaction;
((CardTransaction2) => {
  ((cardType2) => {
    cardType2["VISA"] = "VISA";
    cardType2["MC"] = "MC";
    cardType2["AMEX"] = "AMEX";
    cardType2["DISCOVER"] = "DISCOVER";
    cardType2["DINERS_CLUB"] = "DINERS_CLUB";
    cardType2["JCB"] = "JCB";
    cardType2["MAESTRO"] = "MAESTRO";
    cardType2["SOLO"] = "SOLO";
    cardType2["LASER"] = "LASER";
    cardType2["CHINA_UNION_PAY"] = "CHINA_UNION_PAY";
    cardType2["CARTE_BLANCHE"] = "CARTE_BLANCHE";
    cardType2["UNKNOWN"] = "UNKNOWN";
    cardType2["GIFT_CARD"] = "GIFT_CARD";
    cardType2["EBT"] = "EBT";
    cardType2["GIROCARD"] = "GIROCARD";
    cardType2["INTERAC"] = "INTERAC";
    cardType2["OTHER"] = "OTHER";
    cardType2["RUPAY"] = "RUPAY";
  })(CardTransaction2.cardType || (CardTransaction2.cardType = {}));
  ((entryType2) => {
    entryType2["SWIPED"] = "SWIPED";
    entryType2["KEYED"] = "KEYED";
    entryType2["VOICE"] = "VOICE";
    entryType2["VAULTED"] = "VAULTED";
    entryType2["OFFLINE_SWIPED"] = "OFFLINE_SWIPED";
    entryType2["OFFLINE_KEYED"] = "OFFLINE_KEYED";
    entryType2["EMV_CONTACT"] = "EMV_CONTACT";
    entryType2["EMV_CONTACTLESS"] = "EMV_CONTACTLESS";
    entryType2["MSD_CONTACTLESS"] = "MSD_CONTACTLESS";
    entryType2["PINPAD_MANUAL_ENTRY"] = "PINPAD_MANUAL_ENTRY";
    entryType2["QR_CODE"] = "QR_CODE";
    entryType2["SCANNED"] = "SCANNED";
  })(CardTransaction2.entryType || (CardTransaction2.entryType = {}));
  ((type2) => {
    type2["AUTH"] = "AUTH";
    type2["PREAUTH"] = "PREAUTH";
    type2["PREAUTHCAPTURE"] = "PREAUTHCAPTURE";
    type2["ADJUST"] = "ADJUST";
    type2["VOID"] = "VOID";
    type2["VOIDRETURN"] = "VOIDRETURN";
    type2["RETURN"] = "RETURN";
    type2["REFUND"] = "REFUND";
    type2["NAKEDREFUND"] = "NAKEDREFUND";
    type2["GETBALANCE"] = "GETBALANCE";
    type2["BATCHCLOSE"] = "BATCHCLOSE";
    type2["ACTIVATE"] = "ACTIVATE";
    type2["BALANCE_LOCK"] = "BALANCE_LOCK";
    type2["LOAD"] = "LOAD";
    type2["CASHOUT"] = "CASHOUT";
    type2["CASHOUT_ACTIVE_STATUS"] = "CASHOUT_ACTIVE_STATUS";
    type2["REDEMPTION"] = "REDEMPTION";
    type2["REDEMPTION_UNLOCK"] = "REDEMPTION_UNLOCK";
    type2["RELOAD"] = "RELOAD";
    type2["CASH_ADVANCE"] = "CASH_ADVANCE";
    type2["VOID_CREDIT"] = "VOID_CREDIT";
    type2["REFUND_CREDIT"] = "REFUND_CREDIT";
    type2["INTERNET_ACTIVATE"] = "INTERNET_ACTIVATE";
    type2["TOKEN_REQUEST"] = "TOKEN_REQUEST";
    type2["VERIFICATION"] = "VERIFICATION";
  })(CardTransaction2.type || (CardTransaction2.type = {}));
  ((state2) => {
    state2["PENDING"] = "PENDING";
    state2["CLOSED"] = "CLOSED";
  })(CardTransaction2.state || (CardTransaction2.state = {}));
  ((avsResult2) => {
    avsResult2["SUCCESS"] = "SUCCESS";
    avsResult2["ZIP_CODE_MATCH"] = "ZIP_CODE_MATCH";
    avsResult2["ZIP_CODE_MATCH_ADDRESS_NOT_CHECKED"] = "ZIP_CODE_MATCH_ADDRESS_NOT_CHECKED";
    avsResult2["ADDRESS_MATCH"] = "ADDRESS_MATCH";
    avsResult2["ADDRESS_MATCH_ZIP_NOT_CHECKED"] = "ADDRESS_MATCH_ZIP_NOT_CHECKED";
    avsResult2["NEITHER_MATCH"] = "NEITHER_MATCH";
    avsResult2["SERVICE_FAILURE"] = "SERVICE_FAILURE";
    avsResult2["SERVICE_UNAVAILABLE"] = "SERVICE_UNAVAILABLE";
    avsResult2["NOT_CHECKED"] = "NOT_CHECKED";
    avsResult2["ZIP_CODE_NOT_MATCHED_ADDRESS_NOT_CHECKED"] = "ZIP_CODE_NOT_MATCHED_ADDRESS_NOT_CHECKED";
    avsResult2["ADDRESS_NOT_MATCHED_ZIP_CODE_NOT_CHECKED"] = "ADDRESS_NOT_MATCHED_ZIP_CODE_NOT_CHECKED";
  })(CardTransaction2.avsResult || (CardTransaction2.avsResult = {}));
  ((gatewayTxState2) => {
    gatewayTxState2["INITIATED"] = "INITIATED";
    gatewayTxState2["INITIATED_ON_AUTH"] = "INITIATED_ON_AUTH";
    gatewayTxState2["ACKNOWLEDGED"] = "ACKNOWLEDGED";
    gatewayTxState2["CONNECT_FAILED"] = "CONNECT_FAILED";
    gatewayTxState2["TIMEOUT"] = "TIMEOUT";
    gatewayTxState2["FAILED"] = "FAILED";
    gatewayTxState2["REVERSE_INITIATED"] = "REVERSE_INITIATED";
    gatewayTxState2["REVERSE_INITIATED_ON_AUTH"] = "REVERSE_INITIATED_ON_AUTH";
    gatewayTxState2["REVERSED"] = "REVERSED";
    gatewayTxState2["REVERSAL_FAILED"] = "REVERSAL_FAILED";
    gatewayTxState2["EXTERNAL"] = "EXTERNAL";
  })(CardTransaction2.gatewayTxState || (CardTransaction2.gatewayTxState = {}));
})(CardTransaction || (CardTransaction = {}));

var CashAdvanceCustomerIdentification;
((CashAdvanceCustomerIdentification2) => {
  ((idType2) => {
    idType2["DRIVERS_LICENSE"] = "DRIVERS_LICENSE";
    idType2["PASSPORT"] = "PASSPORT";
    idType2["US_MILITARY_ID"] = "US_MILITARY_ID";
    idType2["US_RESIDENT"] = "US_RESIDENT";
    idType2["CONSULAR_ID"] = "CONSULAR_ID";
    idType2["CANADIAN_CITIZEN"] = "CANADIAN_CITIZEN";
    idType2["US_STATE_GOVT_ID"] = "US_STATE_GOVT_ID";
    idType2["OTHER_ID"] = "OTHER_ID";
  })(CashAdvanceCustomerIdentification2.idType || (CashAdvanceCustomerIdentification2.idType = {}));
})(CashAdvanceCustomerIdentification || (CashAdvanceCustomerIdentification = {}));

var CashEvent;
((CashEvent2) => {
  ((type2) => {
    type2["LOAD"] = "LOAD";
    type2["TRANSACTION"] = "TRANSACTION";
    type2["OPEN"] = "OPEN";
    type2["ADJUSTMENT"] = "ADJUSTMENT";
    type2["COUNT"] = "COUNT";
    type2["UNLOAD"] = "UNLOAD";
  })(CashEvent2.type || (CashEvent2.type = {}));
})(CashEvent || (CashEvent = {}));

var Credit;
((Credit2) => {
  ((result2) => {
    result2["SUCCESS"] = "SUCCESS";
    result2["FAIL"] = "FAIL";
    result2["INITIATED"] = "INITIATED";
    result2["VOIDED"] = "VOIDED";
    result2["VOIDING"] = "VOIDING";
    result2["VOID_FAILED"] = "VOID_FAILED";
    result2["AUTH"] = "AUTH";
    result2["AUTH_COMPLETED"] = "AUTH_COMPLETED";
    result2["DISCOUNT"] = "DISCOUNT";
    result2["OFFLINE_RETRYING"] = "OFFLINE_RETRYING";
    result2["PENDING"] = "PENDING";
  })(Credit2.result || (Credit2.result = {}));
})(Credit || (Credit = {}));

var Device;
((Device2) => {
  ((buildType2) => {
    buildType2["ENG"] = "ENG";
    buildType2["USER"] = "USER";
    buildType2["USERDEBUG"] = "USERDEBUG";
  })(Device2.buildType || (Device2.buildType = {}));
})(Device || (Device = {}));

var DisplayAndPrintMessage;
((DisplayAndPrintMessage2) => {
  ((destination2) => {
    destination2["CUSTOMER_DISPLAY"] = "CUSTOMER_DISPLAY";
    destination2["CUSTOMER_RECEIPT"] = "CUSTOMER_RECEIPT";
    destination2["CUSTOMER_RECEIPT_AID_PARAM"] = "CUSTOMER_RECEIPT_AID_PARAM";
    destination2["MERCHANT_DISPLAY"] = "MERCHANT_DISPLAY";
    destination2["MERCHANT_RECEIPT"] = "MERCHANT_RECEIPT";
    destination2["MERCHANT_RECEIPT_AID_PARAM"] = "MERCHANT_RECEIPT_AID_PARAM";
  })(DisplayAndPrintMessage2.destination || (DisplayAndPrintMessage2.destination = {}));
})(DisplayAndPrintMessage || (DisplayAndPrintMessage = {}));

var Employee;
((Employee2) => {
  ((role2) => {
    role2["OWNER"] = "OWNER";
    role2["ADMIN"] = "ADMIN";
    role2["MANAGER"] = "MANAGER";
    role2["EMPLOYEE"] = "EMPLOYEE";
  })(Employee2.role || (Employee2.role = {}));
})(Employee || (Employee = {}));

var EmployeeCard;
((EmployeeCard2) => {
  ((status2) => {
    status2["ACTIVE"] = "ACTIVE";
    status2["DISABLED"] = "DISABLED";
  })(EmployeeCard2.status || (EmployeeCard2.status = {}));
})(EmployeeCard || (EmployeeCard = {}));

var IncrementalAuthorization;
((IncrementalAuthorization2) => {
  ((result2) => {
    result2["SUCCESS"] = "SUCCESS";
    result2["FAIL"] = "FAIL";
    result2["INITIATED"] = "INITIATED";
    result2["VOIDED"] = "VOIDED";
    result2["VOIDING"] = "VOIDING";
    result2["VOID_FAILED"] = "VOID_FAILED";
    result2["AUTH"] = "AUTH";
    result2["AUTH_COMPLETED"] = "AUTH_COMPLETED";
    result2["DISCOUNT"] = "DISCOUNT";
    result2["OFFLINE_RETRYING"] = "OFFLINE_RETRYING";
    result2["PENDING"] = "PENDING";
  })(IncrementalAuthorization2.result || (IncrementalAuthorization2.result = {}));
})(IncrementalAuthorization || (IncrementalAuthorization = {}));

var Item;
((Item2) => {
  ((priceType2) => {
    priceType2["FIXED"] = "FIXED";
    priceType2["VARIABLE"] = "VARIABLE";
    priceType2["PER_UNIT"] = "PER_UNIT";
  })(Item2.priceType || (Item2.priceType = {}));
})(Item || (Item = {}));

var MerchantPlan;
((MerchantPlan2) => {
  ((pricingModel2) => {
    pricingModel2["PER_MONTH"] = "PER_MONTH";
    pricingModel2["PER_DEVICE"] = "PER_DEVICE";
    pricingModel2["TIERED"] = "TIERED";
    pricingModel2["FREE"] = "FREE";
    pricingModel2["SUPPRESSED"] = "SUPPRESSED";
  })(MerchantPlan2.pricingModel || (MerchantPlan2.pricingModel = {}));
})(MerchantPlan || (MerchantPlan = {}));

var MerchantProperties;
((MerchantProperties2) => {
  ((orderTitle2) => {
    orderTitle2["NONE"] = "NONE";
    orderTitle2["MANUAL"] = "MANUAL";
    orderTitle2["AUTOMATIC"] = "AUTOMATIC";
  })(MerchantProperties2.orderTitle || (MerchantProperties2.orderTitle = {}));
})(MerchantProperties || (MerchantProperties = {}));

var Order;
((Order2) => {
  ((paymentState2) => {
    paymentState2["OPEN"] = "OPEN";
    paymentState2["PAID"] = "PAID";
    paymentState2["REFUNDED"] = "REFUNDED";
    paymentState2["CREDITED"] = "CREDITED";
    paymentState2["PARTIALLY_PAID"] = "PARTIALLY_PAID";
    paymentState2["PARTIALLY_REFUNDED"] = "PARTIALLY_REFUNDED";
  })(Order2.paymentState || (Order2.paymentState = {}));
  ((payType2) => {
    payType2["SPLIT_GUEST"] = "SPLIT_GUEST";
    payType2["SPLIT_ITEM"] = "SPLIT_ITEM";
    payType2["SPLIT_CUSTOM"] = "SPLIT_CUSTOM";
    payType2["FULL"] = "FULL";
  })(Order2.payType || (Order2.payType = {}));
})(Order || (Order = {}));

var OrderType;
((OrderType2) => {
  ((hoursAvailable2) => {
    hoursAvailable2["ALL"] = "ALL";
    hoursAvailable2["BUSINESS"] = "BUSINESS";
    hoursAvailable2["CUSTOM"] = "CUSTOM";
  })(OrderType2.hoursAvailable || (OrderType2.hoursAvailable = {}));
  ((customerIdMethod2) => {
    customerIdMethod2["NAME"] = "NAME";
    customerIdMethod2["TABLE"] = "TABLE";
    customerIdMethod2["NAME_TABLE"] = "NAME_TABLE";
  })(OrderType2.customerIdMethod || (OrderType2.customerIdMethod = {}));
})(OrderType || (OrderType = {}));

var Payment;
((Payment2) => {
  ((result2) => {
    result2["SUCCESS"] = "SUCCESS";
    result2["FAIL"] = "FAIL";
    result2["INITIATED"] = "INITIATED";
    result2["VOIDED"] = "VOIDED";
    result2["VOIDING"] = "VOIDING";
    result2["VOID_FAILED"] = "VOID_FAILED";
    result2["AUTH"] = "AUTH";
    result2["AUTH_COMPLETED"] = "AUTH_COMPLETED";
    result2["DISCOUNT"] = "DISCOUNT";
    result2["OFFLINE_RETRYING"] = "OFFLINE_RETRYING";
    result2["PENDING"] = "PENDING";
  })(Payment2.result || (Payment2.result = {}));
  ((voidReason2) => {
    voidReason2["USER_CANCEL"] = "USER_CANCEL";
    voidReason2["TRANSPORT_ERROR"] = "TRANSPORT_ERROR";
    voidReason2["REJECT_SIGNATURE"] = "REJECT_SIGNATURE";
    voidReason2["REJECT_PARTIAL_AUTH"] = "REJECT_PARTIAL_AUTH";
    voidReason2["NOT_APPROVED"] = "NOT_APPROVED";
    voidReason2["FAILED"] = "FAILED";
    voidReason2["AUTH_CLOSED_NEW_CARD"] = "AUTH_CLOSED_NEW_CARD";
    voidReason2["DEVELOPER_PAY_PARTIAL_AUTH"] = "DEVELOPER_PAY_PARTIAL_AUTH";
    voidReason2["REJECT_DUPLICATE"] = "REJECT_DUPLICATE";
    voidReason2["REJECT_OFFLINE"] = "REJECT_OFFLINE";
    voidReason2["GIFTCARD_LOAD_FAILED"] = "GIFTCARD_LOAD_FAILED";
    voidReason2["USER_GIFTCARD_LOAD_CANCEL"] = "USER_GIFTCARD_LOAD_CANCEL";
    voidReason2["DEVELOPER_PAY_TIP_ADJUST_FAILED"] = "DEVELOPER_PAY_TIP_ADJUST_FAILED";
    voidReason2["USER_CUSTOMER_CANCEL"] = "USER_CUSTOMER_CANCEL";
    voidReason2["FRAUD"] = "FRAUD";
    voidReason2["REJECT_GREATER_APPROVED_AMOUNT"] = "REJECT_GREATER_APPROVED_AMOUNT";
    voidReason2["TIMEOUT"] = "TIMEOUT";
  })(Payment2.voidReason || (Payment2.voidReason = {}));
})(Payment || (Payment = {}));

var PrintOrder;
((PrintOrder2) => {
  ((category2) => {
    category2["ORDER"] = "ORDER";
    category2["RECEIPT"] = "RECEIPT";
    category2["FISCAL"] = "FISCAL";
    category2["LABEL"] = "LABEL";
    category2["TEST_PRINT"] = "TEST_PRINT";
  })(PrintOrder2.category || (PrintOrder2.category = {}));
  ((state2) => {
    state2["CREATED"] = "CREATED";
    state2["PRINTING"] = "PRINTING";
    state2["FAILED"] = "FAILED";
    state2["DONE"] = "DONE";
  })(PrintOrder2.state || (PrintOrder2.state = {}));
})(PrintOrder || (PrintOrder = {}));

var PurchaseCardL2;
((PurchaseCardL22) => {
  ((taxIndicator2) => {
    taxIndicator2["UNKNOWN"] = "UNKNOWN";
    taxIndicator2["TAXABLE"] = "TAXABLE";
    taxIndicator2["NON_TAXABLE"] = "NON_TAXABLE";
  })(PurchaseCardL22.taxIndicator || (PurchaseCardL22.taxIndicator = {}));
})(PurchaseCardL2 || (PurchaseCardL2 = {}));

var Refund;
((Refund2) => {
  ((status2) => {
    status2["FAIL"] = "FAIL";
    status2["SUCCESS"] = "SUCCESS";
    status2["PENDING"] = "PENDING";
  })(Refund2.status || (Refund2.status = {}));
})(Refund || (Refund = {}));

var Role;
((Role2) => {
  ((systemRole2) => {
    systemRole2["OWNER"] = "OWNER";
    systemRole2["ADMIN"] = "ADMIN";
    systemRole2["MANAGER"] = "MANAGER";
    systemRole2["EMPLOYEE"] = "EMPLOYEE";
  })(Role2.systemRole || (Role2.systemRole = {}));
})(Role || (Role = {}));

var TaxRate;
((TaxRate2) => {
  ((taxType2) => {
    taxType2["VAT_TAXABLE"] = "VAT_TAXABLE";
    taxType2["VAT_NON_TAXABLE"] = "VAT_NON_TAXABLE";
    taxType2["VAT_EXEMPT"] = "VAT_EXEMPT";
    taxType2["INTERNAL_TAX"] = "INTERNAL_TAX";
    taxType2["PARTNER_TAX"] = "PARTNER_TAX";
  })(TaxRate2.taxType || (TaxRate2.taxType = {}));
})(TaxRate || (TaxRate = {}));

var TerminalManagementComponent;
((TerminalManagementComponent2) => {
  ((type2) => {
    type2["ACQUIRER_PROTOCOL_PARAMS"] = "ACQUIRER_PROTOCOL_PARAMS";
    type2["APPLICATION_PARAMS"] = "APPLICATION_PARAMS";
    type2["TERMINAL_PARAMS"] = "TERMINAL_PARAMS";
    type2["SECURITY_PARAMS"] = "SECURITY_PARAMS";
    type2["SERVER"] = "SERVER";
    type2["TERMINAL"] = "TERMINAL";
    type2["DEVICE"] = "DEVICE";
    type2["SECURE_MODULE"] = "SECURE_MODULE";
    type2["PAYMENT_APPLICATION"] = "PAYMENT_APPLICATION";
    type2["EMV_KERNEL"] = "EMV_KERNEL";
    type2["EMV_LEVEL1"] = "EMV_LEVEL1";
    type2["MIDDLEWARE"] = "MIDDLEWARE";
    type2["DRIVER"] = "DRIVER";
    type2["OPERATING_SYSTEM"] = "OPERATING_SYSTEM";
    type2["MERCHANT_PARAMS"] = "MERCHANT_PARAMS";
    type2["CERTIFICATE_PARAMS"] = "CERTIFICATE_PARAMS";
    type2["TMS_PROTOCOL_PARAMS"] = "TMS_PROTOCOL_PARAMS";
  })(TerminalManagementComponent2.type || (TerminalManagementComponent2.type = {}));
})(TerminalManagementComponent || (TerminalManagementComponent = {}));

var TransactionInfo;
((TransactionInfo2) => {
  ((accountSelection2) => {
    accountSelection2["CREDIT"] = "CREDIT";
    accountSelection2["DEBIT"] = "DEBIT";
    accountSelection2["CHECKING"] = "CHECKING";
    accountSelection2["SAVINGS"] = "SAVINGS";
  })(TransactionInfo2.accountSelection || (TransactionInfo2.accountSelection = {}));
  ((selectedService2) => {
    selectedService2["NONE"] = "NONE";
    selectedService2["PAYMENT"] = "PAYMENT";
    selectedService2["REFUND"] = "REFUND";
    selectedService2["CANCELLATION"] = "CANCELLATION";
    selectedService2["PRE_AUTH"] = "PRE_AUTH";
    selectedService2["UPDATE_PRE_AUTH"] = "UPDATE_PRE_AUTH";
    selectedService2["PAYMENT_COMPLETION"] = "PAYMENT_COMPLETION";
    selectedService2["CASH_ADVANCE"] = "CASH_ADVANCE";
    selectedService2["DEFERRED_PAYMENT"] = "DEFERRED_PAYMENT";
    selectedService2["DEFERRED_PAYMENT_COMPLETION"] = "DEFERRED_PAYMENT_COMPLETION";
    selectedService2["VOICE_AUTHORISATION"] = "VOICE_AUTHORISATION";
    selectedService2["CARDHOLDER_DETECTION"] = "CARDHOLDER_DETECTION";
    selectedService2["TOKEN_REQUEST"] = "TOKEN_REQUEST";
    selectedService2["VERIFICATION"] = "VERIFICATION";
  })(TransactionInfo2.selectedService || (TransactionInfo2.selectedService = {}));
  ((transactionResult2) => {
    transactionResult2["APPROVED"] = "APPROVED";
    transactionResult2["DECLINED"] = "DECLINED";
    transactionResult2["ABORTED"] = "ABORTED";
    transactionResult2["VOICE_AUTHORISATION"] = "VOICE_AUTHORISATION";
    transactionResult2["PAYMENT_PART_ONLY"] = "PAYMENT_PART_ONLY";
    transactionResult2["PARTIALLY_APPROVED"] = "PARTIALLY_APPROVED";
    transactionResult2["NONE"] = "NONE";
  })(TransactionInfo2.transactionResult || (TransactionInfo2.transactionResult = {}));
  ((txFormat2) => {
    txFormat2["DEFAULT"] = "DEFAULT";
    txFormat2["NEXO"] = "NEXO";
  })(TransactionInfo2.txFormat || (TransactionInfo2.txFormat = {}));
  ((reversalReason2) => {
    reversalReason2["CHIP_DECLINE"] = "CHIP_DECLINE";
    reversalReason2["CARDHOLDER_CANCELLATION"] = "CARDHOLDER_CANCELLATION";
    reversalReason2["COMMUNICATION_ERROR"] = "COMMUNICATION_ERROR";
    reversalReason2["OTHER_REASON"] = "OTHER_REASON";
  })(TransactionInfo2.reversalReason || (TransactionInfo2.reversalReason = {}));
  ((entryType2) => {
    entryType2["SWIPED"] = "SWIPED";
    entryType2["KEYED"] = "KEYED";
    entryType2["VOICE"] = "VOICE";
    entryType2["VAULTED"] = "VAULTED";
    entryType2["OFFLINE_SWIPED"] = "OFFLINE_SWIPED";
    entryType2["OFFLINE_KEYED"] = "OFFLINE_KEYED";
    entryType2["EMV_CONTACT"] = "EMV_CONTACT";
    entryType2["EMV_CONTACTLESS"] = "EMV_CONTACTLESS";
    entryType2["MSD_CONTACTLESS"] = "MSD_CONTACTLESS";
    entryType2["PINPAD_MANUAL_ENTRY"] = "PINPAD_MANUAL_ENTRY";
    entryType2["QR_CODE"] = "QR_CODE";
    entryType2["SCANNED"] = "SCANNED";
  })(TransactionInfo2.entryType || (TransactionInfo2.entryType = {}));
  ((clientCardType2) => {
    clientCardType2["VISA"] = "VISA";
    clientCardType2["MC"] = "MC";
    clientCardType2["AMEX"] = "AMEX";
    clientCardType2["DISCOVER"] = "DISCOVER";
    clientCardType2["DINERS_CLUB"] = "DINERS_CLUB";
    clientCardType2["JCB"] = "JCB";
    clientCardType2["MAESTRO"] = "MAESTRO";
    clientCardType2["SOLO"] = "SOLO";
    clientCardType2["LASER"] = "LASER";
    clientCardType2["CHINA_UNION_PAY"] = "CHINA_UNION_PAY";
    clientCardType2["CARTE_BLANCHE"] = "CARTE_BLANCHE";
    clientCardType2["UNKNOWN"] = "UNKNOWN";
    clientCardType2["GIFT_CARD"] = "GIFT_CARD";
    clientCardType2["EBT"] = "EBT";
    clientCardType2["GIROCARD"] = "GIROCARD";
    clientCardType2["INTERAC"] = "INTERAC";
    clientCardType2["OTHER"] = "OTHER";
    clientCardType2["RUPAY"] = "RUPAY";
  })(TransactionInfo2.clientCardType || (TransactionInfo2.clientCardType = {}));
  ((cardEntryType2) => {
    cardEntryType2["SWIPED"] = "SWIPED";
    cardEntryType2["KEYED"] = "KEYED";
    cardEntryType2["VOICE"] = "VOICE";
    cardEntryType2["VAULTED"] = "VAULTED";
    cardEntryType2["OFFLINE_SWIPED"] = "OFFLINE_SWIPED";
    cardEntryType2["OFFLINE_KEYED"] = "OFFLINE_KEYED";
    cardEntryType2["EMV_CONTACT"] = "EMV_CONTACT";
    cardEntryType2["EMV_CONTACTLESS"] = "EMV_CONTACTLESS";
    cardEntryType2["MSD_CONTACTLESS"] = "MSD_CONTACTLESS";
    cardEntryType2["PINPAD_MANUAL_ENTRY"] = "PINPAD_MANUAL_ENTRY";
    cardEntryType2["QR_CODE"] = "QR_CODE";
    cardEntryType2["SCANNED"] = "SCANNED";
  })(TransactionInfo2.cardEntryType || (TransactionInfo2.cardEntryType = {}));
})(TransactionInfo || (TransactionInfo = {}));

var TransactionSettings;
((TransactionSettings2) => {
  ((signatureEntryLocation2) => {
    signatureEntryLocation2["ON_SCREEN"] = "ON_SCREEN";
    signatureEntryLocation2["ON_PAPER"] = "ON_PAPER";
    signatureEntryLocation2["NONE"] = "NONE";
  })(TransactionSettings2.signatureEntryLocation || (TransactionSettings2.signatureEntryLocation = {}));
  ((tipMode2) => {
    tipMode2["TIP_PROVIDED"] = "TIP_PROVIDED";
    tipMode2["ON_SCREEN_BEFORE_PAYMENT"] = "ON_SCREEN_BEFORE_PAYMENT";
    tipMode2["ON_SCREEN_AFTER_PAYMENT"] = "ON_SCREEN_AFTER_PAYMENT";
    tipMode2["ON_PAPER"] = "ON_PAPER";
    tipMode2["NO_TIP"] = "NO_TIP";
  })(TransactionSettings2.tipMode || (TransactionSettings2.tipMode = {}));
})(TransactionSettings || (TransactionSettings = {}));

var VoidedLineItem;
((VoidedLineItem2) => {
  ((clientEventType2) => {
    clientEventType2["DELETED_LINE_ITEM"] = "DELETED_LINE_ITEM";
    clientEventType2["MOVED_TABLE"] = "MOVED_TABLE";
    clientEventType2["LEFT_TABLE"] = "LEFT_TABLE";
    clientEventType2["CUSTOM_LINE_ITEM_CANCELLED"] = "CUSTOM_LINE_ITEM_CANCELLED";
    clientEventType2["WHILE_ADDING_LINE_ITEM_CANCELLED"] = "WHILE_ADDING_LINE_ITEM_CANCELLED";
  })(VoidedLineItem2.clientEventType || (VoidedLineItem2.clientEventType = {}));
})(VoidedLineItem || (VoidedLineItem = {}));

var VoidReasonDetails;
((VoidReasonDetails2) => {
  ((voidReasonCode2) => {
    voidReasonCode2["CANCEL_PAYMENT_ADJUST"] = "CANCEL_PAYMENT_ADJUST";
    voidReasonCode2["BREAK_RESET"] = "BREAK_RESET";
    voidReasonCode2["CANCEL"] = "CANCEL";
    voidReasonCode2["AUTH_FAILED"] = "AUTH_FAILED";
    voidReasonCode2["NETWORK_FAILED"] = "NETWORK_FAILED";
    voidReasonCode2["NON_OK_RESULT_CODE_RETURNED_FROM_VERIFY_CVM"] = "NON_OK_RESULT_CODE_RETURNED_FROM_VERIFY_CVM";
    voidReasonCode2["PARTIAL_AUTH_NOT_ALLOWED"] = "PARTIAL_AUTH_NOT_ALLOWED";
    voidReasonCode2["PARTIAL_AUTH_CANCELLED"] = "PARTIAL_AUTH_CANCELLED";
    voidReasonCode2["QUICK_CHIP_DECLINE"] = "QUICK_CHIP_DECLINE";
    voidReasonCode2["KERNEL_DECLINE"] = "KERNEL_DECLINE";
    voidReasonCode2["NON_OK_RESULT_CODE_FROM_FORCE_ACCEPT"] = "NON_OK_RESULT_CODE_FROM_FORCE_ACCEPT";
    voidReasonCode2["MERCHANT_CANCELLED_THE_FORCE_ACCEPTANCE"] = "MERCHANT_CANCELLED_THE_FORCE_ACCEPTANCE";
    voidReasonCode2["CARD_READER_ERROR"] = "CARD_READER_ERROR";
    voidReasonCode2["UNKNOWN_EXCEPTION"] = "UNKNOWN_EXCEPTION";
    voidReasonCode2["ERROR_EVENT"] = "ERROR_EVENT";
    voidReasonCode2["KERNEL_EXCEPTION"] = "KERNEL_EXCEPTION";
    voidReasonCode2["FATAL_EXCEPTION"] = "FATAL_EXCEPTION";
    voidReasonCode2["CARD_CHECK_FAILED_FOR_REVERSAL"] = "CARD_CHECK_FAILED_FOR_REVERSAL";
    voidReasonCode2["MANUAL_ENTRY_NOT_ALLOWED"] = "MANUAL_ENTRY_NOT_ALLOWED";
    voidReasonCode2["MANUAL_ENTRY_NOT_ALLOWED_FOR_CARD"] = "MANUAL_ENTRY_NOT_ALLOWED_FOR_CARD";
    voidReasonCode2["SWIPE_CARD_CHECK_FAILED_FOR_REVERSAL"] = "SWIPE_CARD_CHECK_FAILED_FOR_REVERSAL";
    voidReasonCode2["OFFLINE_AUTH_FAILED"] = "OFFLINE_AUTH_FAILED";
    voidReasonCode2["TXN_STATUS_DECLINED"] = "TXN_STATUS_DECLINED";
    voidReasonCode2["COMPLETION_DEVICE"] = "COMPLETION_DEVICE";
    voidReasonCode2["NON_OK_RESULT_CODE_FROM_DUPLICATE_CHECK"] = "NON_OK_RESULT_CODE_FROM_DUPLICATE_CHECK";
    voidReasonCode2["MERCHANT_CANCELLED_THE_DUPLICATE_CHECK"] = "MERCHANT_CANCELLED_THE_DUPLICATE_CHECK";
    voidReasonCode2["NON_OK_RESULT_CODE_RETURNED_FROM_OFFLINE_SCREEN"] = "NON_OK_RESULT_CODE_RETURNED_FROM_OFFLINE_SCREEN";
    voidReasonCode2["MERCHANT_CANCELLED_OFFLINE_PAYMENT"] = "MERCHANT_CANCELLED_OFFLINE_PAYMENT";
    voidReasonCode2["OFFLINE_AUTH_FAILED_ON_CARD_PRESENT_REVERSAL"] = "OFFLINE_AUTH_FAILED_ON_CARD_PRESENT_REVERSAL";
    voidReasonCode2["QUICK_CHIP_TIME_OUT"] = "QUICK_CHIP_TIME_OUT";
    voidReasonCode2["HANDLE_PAY_STATE"] = "HANDLE_PAY_STATE";
    voidReasonCode2["HANDLE_CONTACT_REQUIRED"] = "HANDLE_CONTACT_REQUIRED";
    voidReasonCode2["FINALIZE"] = "FINALIZE";
    voidReasonCode2["HANDLE_CARD_DECLINED_TXN_STATUS"] = "HANDLE_CARD_DECLINED_TXN_STATUS";
    voidReasonCode2["MERCHANT_REASON"] = "MERCHANT_REASON";
  })(VoidReasonDetails2.voidReasonCode || (VoidReasonDetails2.voidReasonCode = {}));
})(VoidReasonDetails || (VoidReasonDetails = {}));

const isDefined = (value) => {
  return value !== void 0 && value !== null;
};
const isString = (value) => {
  return typeof value === "string";
};
const isStringWithValue = (value) => {
  return isString(value) && value !== "";
};
const isBlob = (value) => {
  return typeof value === "object" && typeof value.type === "string" && typeof value.stream === "function" && typeof value.arrayBuffer === "function" && typeof value.constructor === "function" && typeof value.constructor.name === "string" && /^(Blob|File)$/.test(value.constructor.name) && /^(Blob|File)$/.test(value[Symbol.toStringTag]);
};
const isFormData = (value) => {
  return value instanceof FormData;
};
const base64 = (str) => {
  try {
    return btoa(str);
  } catch (err) {
    return Buffer.from(str).toString("base64");
  }
};
const getQueryString = (params) => {
  const qs = [];
  const append = (key, value) => {
    qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  };
  const process = (key, value) => {
    if (isDefined(value)) {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          process(key, v);
        });
      } else if (typeof value === "object") {
        Object.entries(value).forEach(([k, v]) => {
          process(`${key}[${k}]`, v);
        });
      } else {
        append(key, value);
      }
    }
  };
  Object.entries(params).forEach(([key, value]) => {
    process(key, value);
  });
  if (qs.length > 0) {
    return `?${qs.join("&")}`;
  }
  return "";
};
const getUrl = (config, options) => {
  const encoder = config.ENCODE_PATH || encodeURI;
  const path = options.url.replace("{api-version}", config.VERSION).replace(/{(.*?)}/g, (substring, group) => {
    if (options.path?.hasOwnProperty(group)) {
      return encoder(String(options.path[group]));
    }
    return substring;
  });
  const url = `${config.BASE}${path}`;
  if (options.query) {
    return `${url}${getQueryString(options.query)}`;
  }
  return url;
};
const getFormData = (options) => {
  if (options.formData) {
    const formData = new FormData();
    const process = (key, value) => {
      if (isString(value) || isBlob(value)) {
        formData.append(key, value);
      } else {
        formData.append(key, JSON.stringify(value));
      }
    };
    Object.entries(options.formData).filter(([_, value]) => isDefined(value)).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => process(key, v));
      } else {
        process(key, value);
      }
    });
    return formData;
  }
  return void 0;
};
const resolve = async (options, resolver) => {
  if (typeof resolver === "function") {
    return resolver(options);
  }
  return resolver;
};
const getHeaders = async (config, options) => {
  const token = await resolve(options, config.TOKEN);
  const username = await resolve(options, config.USERNAME);
  const password = await resolve(options, config.PASSWORD);
  const additionalHeaders = await resolve(options, config.HEADERS);
  const headers = Object.entries({
    Accept: "application/json",
    ...additionalHeaders,
    ...options.headers
  }).filter(([_, value]) => isDefined(value)).reduce((headers2, [key, value]) => ({
    ...headers2,
    [key]: String(value)
  }), {});
  if (isStringWithValue(token)) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  if (isStringWithValue(username) && isStringWithValue(password)) {
    const credentials = base64(`${username}:${password}`);
    headers["Authorization"] = `Basic ${credentials}`;
  }
  if (options.body) {
    if (options.mediaType) {
      headers["Content-Type"] = options.mediaType;
    } else if (isBlob(options.body)) {
      headers["Content-Type"] = options.body.type || "application/octet-stream";
    } else if (isString(options.body)) {
      headers["Content-Type"] = "text/plain";
    } else if (!isFormData(options.body)) {
      headers["Content-Type"] = "application/json";
    }
  }
  return new Headers(headers);
};
const getRequestBody = (options) => {
  if (options.body) {
    if (options.mediaType?.includes("/json")) {
      return JSON.stringify(options.body);
    } else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {
      return options.body;
    } else {
      return JSON.stringify(options.body);
    }
  }
  return void 0;
};
const sendRequest = async (config, options, url, body, formData, headers, onCancel) => {
  const controller = new AbortController();
  const request2 = {
    headers,
    body: body ?? formData,
    method: options.method,
    signal: controller.signal
  };
  if (config.WITH_CREDENTIALS) {
    request2.credentials = config.CREDENTIALS;
  }
  onCancel(() => controller.abort());
  return await fetch(url, request2);
};
const getResponseHeader = (response, responseHeader) => {
  if (responseHeader) {
    const content = response.headers.get(responseHeader);
    if (isString(content)) {
      return content;
    }
  }
  return void 0;
};
const getResponseBody = async (response) => {
  if (response.status !== 204) {
    try {
      const contentType = response.headers.get("Content-Type");
      if (contentType) {
        const isJSON = contentType.toLowerCase().startsWith("application/json");
        if (isJSON) {
          return await response.json();
        } else {
          return await response.text();
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  return void 0;
};
const catchErrorCodes = (options, result) => {
  const errors = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",
    ...options.errors
  };
  const error = errors[result.status];
  if (error) {
    throw new ApiError(options, result, error);
  }
  if (!result.ok) {
    throw new ApiError(options, result, "Generic Error");
  }
};
const request = (config, options) => {
  return new CancelablePromise(async (resolve2, reject, onCancel) => {
    try {
      const url = getUrl(config, options);
      const formData = getFormData(options);
      const body = getRequestBody(options);
      const headers = await getHeaders(config, options);
      if (!onCancel.isCancelled) {
        const response = await sendRequest(config, options, url, body, formData, headers, onCancel);
        const responseBody = await getResponseBody(response);
        const responseHeader = getResponseHeader(response, options.responseHeader);
        const result = {
          url,
          ok: response.ok,
          status: response.status,
          statusText: response.statusText,
          body: responseHeader ?? responseBody
        };
        catchErrorCodes(options, result);
        resolve2(result.body);
      }
    } catch (error) {
      reject(error);
    }
  });
};

class InventoryService {
  static inventoryGetItems(mId, filter, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/items",
      path: {
        "mId": mId
      },
      query: {
        "filter": filter,
        "expand": expand
      }
    });
  }
  static inventoryCreateItem(mId, expand, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/items",
      path: {
        "mId": mId
      },
      query: {
        "expand": expand
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static inventoryBulkDeleteItems(mId) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/v3/merchants/{mId}/items",
      path: {
        "mId": mId
      }
    });
  }
  static inventoryGetItemsNoRevenueClass(mId, filter, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/items_no_revenue_class",
      path: {
        "mId": mId
      },
      query: {
        "filter": filter,
        "expand": expand
      }
    });
  }
  static inventoryGetItem(mId, itemId, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/items/{itemId}",
      path: {
        "mId": mId,
        "itemId": itemId
      },
      query: {
        "expand": expand
      }
    });
  }
  static inventoryUpdateItem(mId, itemId, expand, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/items/{itemId}",
      path: {
        "mId": mId,
        "itemId": itemId
      },
      query: {
        "expand": expand
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static inventoryDeleteItem(mId, itemId) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/v3/merchants/{mId}/items/{itemId}",
      path: {
        "mId": mId,
        "itemId": itemId
      }
    });
  }
  static inventoryBulkPatchInventoryItems(mId, requestBody) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/v3/merchants/{mId}/bulk_items",
      path: {
        "mId": mId
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static inventoryBulkCreateInventoryItems(mId, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/bulk_items",
      path: {
        "mId": mId
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static inventoryGetItemStocks(mId) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/item_stocks",
      path: {
        "mId": mId
      }
    });
  }
  static inventoryGetItemStock(mId, itemId) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/item_stocks/{itemId}",
      path: {
        "mId": mId,
        "itemId": itemId
      }
    });
  }
  static inventoryUpdateItemStock(mId, itemId, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/item_stocks/{itemId}",
      path: {
        "mId": mId,
        "itemId": itemId
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static inventoryDeleteItemStock(mId, itemId) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/v3/merchants/{mId}/item_stocks/{itemId}",
      path: {
        "mId": mId,
        "itemId": itemId
      }
    });
  }
  static inventoryGetItemGroups(mId, filter, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/item_groups",
      path: {
        "mId": mId
      },
      query: {
        "filter": filter,
        "expand": expand
      }
    });
  }
  static inventoryCreateItemGroup(mId, expand, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/item_groups",
      path: {
        "mId": mId
      },
      query: {
        "expand": expand
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static inventoryGetItemGroup(mId, itemGroupId, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/item_groups/{itemGroupId}",
      path: {
        "mId": mId,
        "itemGroupId": itemGroupId
      },
      query: {
        "expand": expand
      }
    });
  }
  static inventoryUpdateItemGroup(mId, itemGroupId, expand, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/item_groups/{itemGroupId}",
      path: {
        "mId": mId,
        "itemGroupId": itemGroupId
      },
      query: {
        "expand": expand
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static inventoryDeleteItemGroup(mId, itemGroupId) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/v3/merchants/{mId}/item_groups/{itemGroupId}",
      path: {
        "mId": mId,
        "itemGroupId": itemGroupId
      }
    });
  }
  static tagGetTags(mId, filter, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/tags",
      path: {
        "mId": mId
      },
      query: {
        "filter": filter,
        "expand": expand
      }
    });
  }
  static tagCreateTag(mId, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/tags",
      path: {
        "mId": mId
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static tagBulkDeleteTags(mId) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/v3/merchants/{mId}/tags",
      path: {
        "mId": mId
      }
    });
  }
  static tagGetTag(mId, tagId, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/tags/{tagId}",
      path: {
        "mId": mId,
        "tagId": tagId
      },
      query: {
        "expand": expand
      }
    });
  }
  static tagUpdateTag(mId, tagId, expand, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/tags/{tagId}",
      path: {
        "mId": mId,
        "tagId": tagId
      },
      query: {
        "expand": expand
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static tagDeleteTag(mId, tagId) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/v3/merchants/{mId}/tags/{tagId}",
      path: {
        "mId": mId,
        "tagId": tagId
      }
    });
  }
  static tagGetItemTags(mId, itemId, filter, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/items/{itemId}/tags",
      path: {
        "mId": mId,
        "itemId": itemId
      },
      query: {
        "filter": filter,
        "expand": expand
      }
    });
  }
  static tagGetTaggedItems(mId, tagId, filter, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/tags/{tagId}/items",
      path: {
        "mId": mId,
        "tagId": tagId
      },
      query: {
        "filter": filter,
        "expand": expand
      }
    });
  }
  static tagGetTagItems(mId, filter) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/tag_items",
      path: {
        "mId": mId
      },
      query: {
        "filter": filter
      }
    });
  }
  static tagCreateOrDeleteTagItems(mId, _delete) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/tag_items",
      path: {
        "mId": mId
      },
      query: {
        "delete": _delete
      }
    });
  }
  static taxrateGetTaxRates(mId, filter, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/tax_rates",
      path: {
        "mId": mId
      },
      query: {
        "filter": filter,
        "expand": expand
      }
    });
  }
  static taxrateCreateTaxRate(mId, expand, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/tax_rates",
      path: {
        "mId": mId
      },
      query: {
        "expand": expand
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static taxrateGetTaxRate(mId, taxId, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/tax_rates/{taxId}",
      path: {
        "mId": mId,
        "taxId": taxId
      },
      query: {
        "expand": expand
      }
    });
  }
  static taxrateUpdateTaxRate(mId, taxId, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/tax_rates/{taxId}",
      path: {
        "mId": mId,
        "taxId": taxId
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static taxrateDeleteTaxRate(mId, taxId) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/v3/merchants/{mId}/tax_rates/{taxId}",
      path: {
        "mId": mId,
        "taxId": taxId
      }
    });
  }
  static categoryGetCategories(mId, filter, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/categories",
      path: {
        "mId": mId
      },
      query: {
        "filter": filter,
        "expand": expand
      }
    });
  }
  static categoryCreateCategory(mId, expand, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/categories",
      path: {
        "mId": mId
      },
      query: {
        "expand": expand
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static categoryBulkDeleteCategories(mId) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/v3/merchants/{mId}/categories",
      path: {
        "mId": mId
      }
    });
  }
  static categoryGetCategory(mId, catId, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/categories/{catId}",
      path: {
        "mId": mId,
        "catId": catId
      },
      query: {
        "expand": expand
      }
    });
  }
  static categoryUpdateCategory(mId, catId, expand, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/categories/{catId}",
      path: {
        "mId": mId,
        "catId": catId
      },
      query: {
        "expand": expand
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static categoryDeleteCategory(mId, catId) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/v3/merchants/{mId}/categories/{catId}",
      path: {
        "mId": mId,
        "catId": catId
      }
    });
  }
  static categoryUpdateCategorySortOrders(mId, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/categories/bulk_sort_orders",
      path: {
        "mId": mId
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static categoryGetCategoryItems(mId, catId, filter, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/categories/{catId}/items",
      path: {
        "mId": mId,
        "catId": catId
      },
      query: {
        "filter": filter,
        "expand": expand
      }
    });
  }
  static categoryGetItemCategories(mId, itemId, filter, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/items/{itemId}/categories",
      path: {
        "mId": mId,
        "itemId": itemId
      },
      query: {
        "filter": filter,
        "expand": expand
      }
    });
  }
  static categoryCreateOrDeleteCategoryItems(mId, expand, _delete) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/category_items",
      path: {
        "mId": mId
      },
      query: {
        "expand": expand,
        "delete": _delete
      }
    });
  }
  static taxrateCreateOrDeleteTaxRateItems(mId, _delete) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/tax_rate_items",
      path: {
        "mId": mId
      },
      query: {
        "delete": _delete
      }
    });
  }
  static taxrateGetItemsByTaxRate(mId, taxId, filter, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/tax_rates/{taxId}/items",
      path: {
        "mId": mId,
        "taxId": taxId
      },
      query: {
        "filter": filter,
        "expand": expand
      }
    });
  }
  static modifierGetModifierGroups(mId, filter, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/modifier_groups",
      path: {
        "mId": mId
      },
      query: {
        "filter": filter,
        "expand": expand
      }
    });
  }
  static modifierCreateModifierGroup(mId, expand, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/modifier_groups",
      path: {
        "mId": mId
      },
      query: {
        "expand": expand
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static modifierBulkDeleteModifierGroups(mId) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/v3/merchants/{mId}/modifier_groups",
      path: {
        "mId": mId
      }
    });
  }
  static modifierGetModifierGroup(mId, modGroupId, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/modifier_groups/{modGroupId}",
      path: {
        "mId": mId,
        "modGroupId": modGroupId
      },
      query: {
        "expand": expand
      }
    });
  }
  static modifierUpdateModifierGroup(mId, modGroupId, expand, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/modifier_groups/{modGroupId}",
      path: {
        "mId": mId,
        "modGroupId": modGroupId
      },
      query: {
        "expand": expand
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static modifierDeleteModifierGroup(mId, modGroupId) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/v3/merchants/{mId}/modifier_groups/{modGroupId}",
      path: {
        "mId": mId,
        "modGroupId": modGroupId
      }
    });
  }
  static modifierCreateOrDeleteItemModifierGroups(mId, _delete) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/item_modifier_groups",
      path: {
        "mId": mId
      },
      query: {
        "delete": _delete
      }
    });
  }
  static modifierUpdateModifierGroupSortOrders(mId, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/modifier_group_sort_orders",
      path: {
        "mId": mId
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static modifierReorderModifiers(mId, modGroupId, requestBody) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/v3/merchants/{mId}/modifier_groups/{modGroupId}/layout",
      path: {
        "mId": mId,
        "modGroupId": modGroupId
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static modifierGetModifierGroupItems(mId, modGroupId, filter, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/modifier_groups/{modGroupId}/items",
      path: {
        "mId": mId,
        "modGroupId": modGroupId
      },
      query: {
        "filter": filter,
        "expand": expand
      }
    });
  }
  static modifierGetModifiers(mId, filter, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/modifiers",
      path: {
        "mId": mId
      },
      query: {
        "filter": filter,
        "expand": expand
      }
    });
  }
  static modifierGetModifiersByGroup(mId, modGroupId, filter, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/modifier_groups/{modGroupId}/modifiers",
      path: {
        "mId": mId,
        "modGroupId": modGroupId
      },
      query: {
        "filter": filter,
        "expand": expand
      }
    });
  }
  static modifierCreateModifier(mId, modGroupId, expand, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/modifier_groups/{modGroupId}/modifiers",
      path: {
        "mId": mId,
        "modGroupId": modGroupId
      },
      query: {
        "expand": expand
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static modifierGetModifier(mId, modGroupId, modId, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/modifier_groups/{modGroupId}/modifiers/{modId}",
      path: {
        "mId": mId,
        "modGroupId": modGroupId,
        "modId": modId
      },
      query: {
        "expand": expand
      }
    });
  }
  static modifierUpdateModifier(mId, modGroupId, modId, expand, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/modifier_groups/{modGroupId}/modifiers/{modId}",
      path: {
        "mId": mId,
        "modGroupId": modGroupId,
        "modId": modId
      },
      query: {
        "expand": expand
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static modifierDeleteModifier(mId, modGroupId, modId) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/v3/merchants/{mId}/modifier_groups/{modGroupId}/modifiers/{modId}",
      path: {
        "mId": mId,
        "modGroupId": modGroupId,
        "modId": modId
      }
    });
  }
  static inventoryGetAttributes(mId, filter) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/attributes",
      path: {
        "mId": mId
      },
      query: {
        "filter": filter
      }
    });
  }
  static inventoryCreateAttribute(mId, expand, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/attributes",
      path: {
        "mId": mId
      },
      query: {
        "expand": expand
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static inventoryGetAttribute(mId, attributeId) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/attributes/{attributeId}",
      path: {
        "mId": mId,
        "attributeId": attributeId
      }
    });
  }
  static inventoryUpdateAttribute(mId, attributeId, expand, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/attributes/{attributeId}",
      path: {
        "mId": mId,
        "attributeId": attributeId
      },
      query: {
        "expand": expand
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static inventoryDeleteAttribute(mId, attributeId) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/v3/merchants/{mId}/attributes/{attributeId}",
      path: {
        "mId": mId,
        "attributeId": attributeId
      }
    });
  }
  static inventoryGetOptions(mId, filter, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/options",
      path: {
        "mId": mId
      },
      query: {
        "filter": filter,
        "expand": expand
      }
    });
  }
  static inventoryGetOptionsByAttribute(mId, attributeId, filter, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/attributes/{attributeId}/options",
      path: {
        "mId": mId,
        "attributeId": attributeId
      },
      query: {
        "filter": filter,
        "expand": expand
      }
    });
  }
  static inventoryCreateOption(mId, attributeId, expand, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/attributes/{attributeId}/options",
      path: {
        "mId": mId,
        "attributeId": attributeId
      },
      query: {
        "expand": expand
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static inventoryGetOptionById(mId, attributeId, optionId, filter, expand) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/attributes/{attributeId}/options/{optionId}",
      path: {
        "mId": mId,
        "attributeId": attributeId,
        "optionId": optionId
      },
      query: {
        "filter": filter,
        "expand": expand
      }
    });
  }
  static inventoryUpdateOption(mId, attributeId, optionId, expand, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/attributes/{attributeId}/options/{optionId}",
      path: {
        "mId": mId,
        "attributeId": attributeId,
        "optionId": optionId
      },
      query: {
        "expand": expand
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static inventoryDeleteOption(mId, attributeId, optionId) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/v3/merchants/{mId}/attributes/{attributeId}/options/{optionId}",
      path: {
        "mId": mId,
        "attributeId": attributeId,
        "optionId": optionId
      }
    });
  }
  static inventoryCreateOrDeleteOptionItems(mId, _delete) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/option_items",
      path: {
        "mId": mId
      },
      query: {
        "delete": _delete
      }
    });
  }
  static inventoryGetDiscounts(mId, filter) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/discounts",
      path: {
        "mId": mId
      },
      query: {
        "filter": filter
      }
    });
  }
  static inventoryCreateDiscount(mId, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/discounts",
      path: {
        "mId": mId
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static inventoryGetDiscount(mId, discountId) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/discounts/{discountId}",
      path: {
        "mId": mId,
        "discountId": discountId
      }
    });
  }
  static inventoryUpdateDiscount(mId, discountId, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/v3/merchants/{mId}/discounts/{discountId}",
      path: {
        "mId": mId,
        "discountId": discountId
      },
      body: requestBody,
      mediaType: "application/json"
    });
  }
  static inventoryDeleteDiscount(mId, discountId) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/v3/merchants/{mId}/discounts/{discountId}",
      path: {
        "mId": mId,
        "discountId": discountId
      }
    });
  }
  static taxrulesGetTaxRules(mId) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/tax_rules",
      path: {
        "mId": mId
      }
    });
  }
  static taxrulesGetTaxRule(mId, taxRuleId) {
    return request(OpenAPI, {
      method: "GET",
      url: "/v3/merchants/{mId}/tax_rules/{taxRuleId}",
      path: {
        "mId": mId,
        "taxRuleId": taxRuleId
      }
    });
  }
}

// TODO: Any way I can avoid initiallizing this here while still avoiding the "| undefined" type?
//const model:ModalContextModel = {state: {isOpen: false}, actions: {open:()=>{},close:()=>{},toggle:()=>{}}};
const ModalContext = solidJs.createContext();
const useModal = () => {
  return solidJs.useContext(ModalContext);
};

// export type TriggerModalProps = {
//     children?: any;
// }

// export const TriggerModal: Component<TriggerModalProps> = (props) => {

//     const [canScroll, setCanScroll] = createSignal(true);

//     const toggleScroll = () => { 
//         setCanScroll(!canScroll());
//         if(!canScroll()) {
//             document.body.style.overflow = "hidden";
//         } else {
//             document.body.style.overflow = "unset";
//         }
//     }

//     return (
//         <label for="my-modal-4" class="btn" onClick={toggleScroll}>
//             {props.children}
//         </label>
//     );
// }

const _tmpl$$2 = ["<div", " class=\"card card-side h-48 bg-base-100 shadow-xl\"><figure class=\"h-full w-48\"><div class=\"bg-cover bg-center\" style=\"", "\"></div></figure><div class=\"card-body\"><h2 class=\"card-title\">", "</h2><p>", "</p><div class=\"card-actions justify-end\"><button class=\"btn\">Add To Cart</button></div></div></div>"];
const getItemThumbnailUrl = itemId => {
  return itemId ? `https://cloverstatic.com/menu-assets/items/${itemId}_576x576.jpeg` : "https://picsum.photos/120";
};
const getPrice = price => {
  if (price < 100) {
    return "$0.00";
  }
  const rawString = price.toString();
  const i = rawString.length - 2;
  return `$${rawString.substring(0, i)}.${rawString.substring(i, rawString.length)}`;
};
const Card = props => {
  useModal();
  return web.ssr(_tmpl$$2, web.ssrHydrationKey(), web.ssrStyle(`background-image: url('${getItemThumbnailUrl(props.item.id)}');`), web.escape(props.item.name), web.escape(getPrice(props.item.price)));
};

const _tmpl$$1 = ["<div", " class=\"container mx-auto\"><div class=\"grid lg:grid-cols-2 md:grid-cols-1 gap-8\">", "</div></div>"];
const Inventory$1 = props => {
  const [items] = solidJs.createSignal(props.items);
  return web.createComponent(solidJs.Suspense, {
    get children() {
      return web.ssr(_tmpl$$1, web.ssrHydrationKey(), web.escape(web.createComponent(solidJs.For, {
        get each() {
          return items();
        },
        get children() {
          return [" ", item => web.createComponent(Card, {
            item: item
          })];
        }
      })));
    }
  });
};

//const Inventory = lazy(() => import("./Inventory"));

// this component lazy loads data and code in parallel
const Inventory = (() => {
  const [items] = solidJs.createResource(async () => {
    // simulate data loading
    OpenAPI.BASE = "https://api.clover.com";
    OpenAPI.TOKEN = "8644a11b-6e02-9f31-e00a-ce7a3bf6569f";
    return (await InventoryService.inventoryGetItems("7WFHVCR73VCK1")).elements.filter(item => item.autoManage);
  });
  return web.createComponent(Inventory$1, {
    get items() {
      return items();
    }
  });
});

const _tmpl$ = ["<head><title>Edgy Veggies</title><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><meta name=\"theme-color\" content=\"#000000\">", "</head>"],
  _tmpl$2 = ["<html", " lang=\"en\">", "<body><div id=\"app\">", "</div></body><script type=\"module\" src=\"js/entry-client.js\" async></script></html>"];
const App = () => {
  return web.ssr(_tmpl$2, web.ssrHydrationKey(), web.createComponent(web.NoHydration, {
    get children() {
      return web.ssr(_tmpl$, web.escape(web.createComponent(web.HydrationScript, {})));
    }
  }), web.escape(web.createComponent(Inventory, {})));
};

const __dirname$1 = path.dirname(url.fileURLToPath((typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('entry-server.js', document.baseURI).href))));
const app = express__default.default();
const port = 8080;
const publicPath = path.join(__dirname$1, "..", "public");
console.log("publicPath", publicPath);
app.use(express__default.default.static(publicPath));
app.get("*", (req, res) => web.renderToStream(() => web.createComponent(App, {})).pipe(res));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
