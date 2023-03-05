CircuitCheck.runCircuitCheck(function () {
    int_test += 1
    text_test = "Var Value: " + int_test
    decimal_test = int_test / 2
    bool_test = int_test % 2 == 0
    CircuitCheck.pause(500)
})
let decimal_test = 0
let bool_test = false
let text_test = ""
let int_test = 0
CircuitCheck.prepareVariables(function () {
    int_test = CircuitCheck.transmitVariableData("int_test", int_test, Type.Integer)
    text_test = CircuitCheck.transmitVariableData("text_test", text_test, Type.String)
    bool_test = CircuitCheck.transmitVariableData("bool_test", bool_test, Type.Boolean)
    decimal_test = CircuitCheck.transmitVariableData("decimal_test", decimal_test, Type.Decimal)
})