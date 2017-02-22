import {JsonModeler} from "../JsonModeler";

const JsonField = JsonModeler.JsonField;

class DemoModel01 {
    @JsonField()
    foo: string;

    @JsonField({name: 'nobar'})
    bar: string;
}

function test01(): void {
    let model01 = new DemoModel01();
    model01.foo = 'hello world';

    console.log('== test 01 ==');
    console.log('\nmodel 01: ', model01);
    console.log('foo meta', JsonModeler.getFieldMeta(model01, 'foo'));
    console.log('bar meta', JsonModeler.getFieldMeta(model01, 'bar'));
}

test01();
