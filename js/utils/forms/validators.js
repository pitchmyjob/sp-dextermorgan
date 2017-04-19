import { UserNotExists } from '../../actions/auth'


export const isRequired = (value) => {
    return value ? undefined : 'Obligatoire'
}

export const asyncValidateUserNotExists = (values, dispatch) => {
    return dispatch(UserNotExists(values))
        .then((response) => {
            return true
        })
        .catch((error) => {
        	fields = error.response.data.field
        	msg = []
        	for (var i in fields) {  
			  msg[fields[i]] = "no disponible"
			}

            throw msg
        })
}
