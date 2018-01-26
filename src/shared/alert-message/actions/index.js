const alertMessageActionTypes = {

}

const success = (text) => ({
  type: alertMessageActionTypes.success,
  className: 'success',
  text
})

const warning = (text) => ({
  type: alertMessageActionTypes.warning,
  className: 'warning',
  text
})

const error = (text) => ({
  type: alertMessageActionTypes.error,
  className: 'danger',
  text
})

const removeAt = (idx) => ({
  type: alertMessageActionTypes.removeAt,
  idx
})

const clearAll = (idx) => ({
  type: alertMessageActionTypes.clearAll
})

const alertMessageActions = { success, warning, error, removeAt, clearAll }

export { alertMessageActions, alertMessageActionTypes }
