const app = require('./app')

test('convert UpperCase text',()=>{
    expect(app('TEJA', 5)).toBe('YJOF')
})

test('convert LowerCase text',()=>{
    expect(app('teja', 5)).toBe('yjof')
})

test('convert text',()=>{
    expect(app('tEjA', 5)).toBe('yJoF')
})

test('convert text with 26 shift',()=>{
    expect(app('tEjA', 26)).toBe('tEjA')
})

test('testing toMatch',()=>{
    expect(app('tEjA', 26)).toMatch('EjA')
})

test('testing not toMatch',()=>{
    expect(app('tEjA', 26)).not.toMatch('I');
})

test('test for undefined',()=>{
    expect(app('',0 )).toBeDefined();
})




