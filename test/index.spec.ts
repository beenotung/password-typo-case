import { expect } from 'chai'
import { expandPasswordList } from '../src/index'

describe('expandPasswordList() TestSuit', () => {
  it('should return a single empty string if given empty password', () => {
    expect(expandPasswordList('')).to.deep.equal([''])
  })
  let originalPassword = 'test'
  let passwordList: string[] = []
  before(() => {
    passwordList = expandPasswordList(originalPassword)
  })
  it('should includes original password', () => {
    expect(passwordList).to.include(originalPassword)
  })
  it('should include sample of first char reversed case', () => {
    expect(passwordList).to.include('Test')
  })
  it('should include sample of every char reversed case', () => {
    expect(passwordList).to.include('TEST')
  })
  it('should include sample of every char reversed expect the first case', () => {
    expect(passwordList).to.include('tEST')
  })
})
