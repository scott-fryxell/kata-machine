enum Option2 {
    Baz,
    Foo(isize),
    Bar(String),
    Fuzz(Vec<String>), // string[], or a []string
}

fn main() {
    let opt2 = Option2::Foo(5);

    let mut opt22 = Option2::Fuzz(vec![]);

    if let Option2::Foo(x) = opt2 {
        let _ = x + 5;
        // x = 7;
    }

    if let Option2::Fuzz(vec) = &mut opt22 {
        vec.push(String::from("Hello, world!"));
    }

    match opt2 {
        Option2::Baz => todo!(),
        Option2::Foo(_) => todo!(),
        Option2::Bar(_) => todo!(),
        Option2::Fuzz(_) => todo!(),
    }
}
