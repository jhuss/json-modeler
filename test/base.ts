import {JsonModeler} from "../JsonModeler";

const JsonField = JsonModeler.JsonField;

const jsonData01 = {
    foo: 'lorem',
    nobar: 'ipsum'
};

class DemoModel01 {
    nofoo: string;

    @JsonField()
    foo: string;

    @JsonField({name: 'nobar'})
    bar: string;
}

function test01(): void {
    let model01 = new DemoModel01();
    let data01 = JSON.stringify(jsonData01);

    console.log('== test 01 ==');
    console.log();

    console.log('data 01:', data01);
    console.log('model 01:', model01);
    console.log();

    console.log('nofoo meta:', JsonModeler.extractMeta(model01, 'nofoo'));
    console.log('foo meta:', JsonModeler.extractMeta(model01, 'foo'));
    console.log('bar meta:', JsonModeler.extractMeta(model01, 'bar'));
    console.log();

    try {
        console.log('applyModel 01:', JsonModeler.applyModel(undefined));
    } catch (e) {
        console.error(`${e.name}: ${e.message}`);
    }

    let modelApply01 = JsonModeler.applyModel({
        model: DemoModel01,
        data: data01
    });
    console.log('applyModel 01:', modelApply01);
}

test01();
