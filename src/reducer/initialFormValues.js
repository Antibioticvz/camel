import { HAIR_TYPE, EYE_TYPE, BEARD_TYPE, BODY_TYPE } from 'constants/form'

export const initialFormValues = {
    age: '22',
    height: '170',
    haircolor: HAIR_TYPE.BLOND,
    eyecolor: EYE_TYPE.GRAY,
    beard: BEARD_TYPE.NO,
    body: BODY_TYPE.COOL,
    cost: 100,
}

export default initialFormValues