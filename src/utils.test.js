import Utils from './utils.jsx';

it('should be properCase', () => {
    expect(Utils.properCase('qwerty')).toBe('Qwerty');
    expect(Utils.properCase('QWERTY')).toBe('Qwerty');
    expect(Utils.properCase('qWeRty')).toBe('Qwerty');
    expect(Utils.properCase('QWErty')).toBe('Qwerty');
    expect(Utils.properCase('qwerty ytrewq')).toBe('Qwerty Ytrewq');
    expect(Utils.properCase('qwerty YTREWQ AsDfG')).toBe('Qwerty Ytrewq Asdfg');
    expect(Utils.properCase('qwerty    asDFg')).toBe('Qwerty Asdfg');
    expect(Utils.properCase('qwerty-ytrewq')).toBe('Qwerty-Ytrewq');
    expect(Utils.properCase('qwerty/ytrewq')).toBe('Qwerty/Ytrewq');
    expect(Utils.properCase('qwerty  / ytrewq')).toBe('Qwerty / Ytrewq');
});
