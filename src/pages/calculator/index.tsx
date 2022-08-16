import React, { useEffect, useState } from 'react'

const Calculator: React.FC = () => {
  const [result, setResult] = useState(0)
  const [expression, setExpression] = useState('')
  const [validExpression, setValidExpression] = useState('')

  const doSome = () => {
    //
  }

  const addCharacter = (character: any) => {
    let value = expression + character.toString()
    setExpression(value)
  }

  const createValidExpression = (character: any) => {
    let value = validExpression + character.toString()
    setValidExpression(value)
  }

  const calculate = () => {
    if (!validExpression) {
      setResult(0)
      return
    }
    // eslint-disable-next-line no-eval
    setResult(eval(validExpression))
  }

  const addOperator = (operator: string) => {
    switch (operator) {
      case '+':
        addCharacter('+')
        createValidExpression('+')
        break
      case '-':
        addCharacter('-')
        createValidExpression('-')
        break
      case 'x':
        addCharacter('x')
        createValidExpression('*')
        break
      case '÷':
        addCharacter('÷')
        createValidExpression('/')
        break

      default:
        break
    }
  }

  useEffect(() => {
    if (!expression) {
      setResult(0)
      setValidExpression('')
    }
  }, [expression])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '80vh',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
      }}
    >
      <div>
        <h1>Calculator</h1>
        <input
          style={{
            height: '30px',
            margin: '0 0 20px 0',
            backgroundColor: 'white',
            border: '1px solid black',
            borderRadius: '5px',
          }}
          type='text'
          name='cal'
          onChange={(e) => {
            doSome()
            setExpression(e.target.value.replace(/\s/g, ''))
            setValidExpression(e.target.value.replace(/\s/g, ''))
          }}
          value={expression}
          disabled
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto auto auto',
              gap: '10px',
            }}
          >
            <button
              onClick={() => {
                addCharacter(1)
                createValidExpression(1)
              }}
            >
              1
            </button>
            <button
              onClick={() => {
                addCharacter(2)
                createValidExpression(2)
              }}
            >
              2
            </button>
            <button
              onClick={() => {
                addCharacter(3)
                createValidExpression(3)
              }}
            >
              3
            </button>
            <button
              onClick={() => {
                addCharacter(4)
                createValidExpression(4)
              }}
            >
              4
            </button>
            <button
              onClick={() => {
                addCharacter(5)
                createValidExpression(5)
              }}
            >
              5
            </button>
            <button
              onClick={() => {
                addCharacter(6)
                createValidExpression(6)
              }}
            >
              6
            </button>
            <button
              onClick={() => {
                addCharacter(7)
                createValidExpression(7)
              }}
            >
              7
            </button>
            <button
              onClick={() => {
                addCharacter(8)
                createValidExpression(8)
              }}
            >
              8
            </button>
            <button
              onClick={() => {
                addCharacter(9)
                createValidExpression(9)
              }}
            >
              9
            </button>
            <button
              onClick={() => {
                addCharacter(0)
                createValidExpression(0)
              }}
            >
              0
            </button>
            <button onClick={() => calculate()}>=</button>
            <button
              onClick={() => {
                setExpression('')
                setValidExpression('')
              }}
            >
              C
            </button>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginLeft: '10px',
            }}
          >
            <button onClick={() => addOperator('+')}>+</button>
            <button onClick={() => addOperator('-')}>-</button>
            <button onClick={() => addOperator('x')}>x</button>
            <button onClick={() => addOperator('÷')}>÷</button>
          </div>
          <div
            style={{
              marginLeft: '10px',
            }}
          >
            <button onClick={() => setExpression(expression.slice(0, -1))}>
              {'<-'}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div>Result:</div>
        <div>{result}</div>
      </div>
    </div>
  )
}

export default Calculator
