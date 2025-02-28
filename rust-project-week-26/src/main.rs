fn main() {
    let ans: u32 = sum(8,8);
    println!("{} is the answer",ans);
    println!("{}" , is_even(ans));
    
    print_banner();


}

fn sum(a: u32,b: u32) -> u32{
    return a+b;
}

fn  is_even(a: u32) -> bool{
    return a % 2 == 0
}

fn print_banner() -> () {
    let banner: String = String::from("Welcome to the video!");
    println!("{}", banner);
}