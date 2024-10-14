import RingBuffer from "@code/RingBuffer";

test("RingBuffer", function() {
    const buffer = new RingBuffer<number>();

    buffer.push(5);
    expect(buffer.pop()).toEqual(5);
    expect(buffer.pop()).toEqual(undefined);

    buffer.push(42);
    buffer.push(9);

    expect(buffer.pop()).toEqual(42);
    expect(buffer.pop()).toEqual(9);
    expect(buffer.pop()).toEqual(undefined);

    buffer.append(42);
    buffer.append(9);
    buffer.append(12);

    expect(buffer.get(2)).toEqual(12);
    expect(buffer.get(1)).toEqual(9);
    expect(buffer.get(0)).toEqual(42);


    buffer.prepend(42);
    buffer.prepend(9);
    buffer.prepend(12);
    expect(buffer.get(0)).toEqual(12);
    expect(buffer.get(1)).toEqual(9);
    expect(buffer.get(2)).toEqual(42); // oldest node

    expect(buffer.unshift()).toEqual(12);

    expect(buffer.peek()).toEqual(9);

    expect(buffer.get(0)).toEqual(9);
    expect(buffer.get(1)).toEqual(42);

});


