import shajs from 'sha.js'

export const hashValue = oldProp => shajs('sha256').update(oldProp).digest('hex').toUpperCase()