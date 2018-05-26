import { classListAsArray } from './index'

const mockElement = {
  classList: {
    '0': 'test-class-1',
    '1': 'test-class-2',
    '1test': 'another-class'
  }
}

describe('testUtils', () => {
  describe('classListAsArray', () => {
    it('returns the correct array for a given element', () => {
      const result = classListAsArray(mockElement)

      expect(result).toMatchSnapshot()
    })
  })
})