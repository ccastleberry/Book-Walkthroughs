use std::env;
use std::process;
use std::error::Error;

use minigrep::Config;

fn main() {
    let args: Vec<String> = env::args().collect();

    let config = Config::new(&args).unwrap_or_else(|err| {
            println!("Problem processing arguements: {}", err);
            process::exit(1);
        }
    );

    if let Err(e) = minigrep::run(config) {
        println!("Application error: {}", e);
        process::exit(1);
    }

    
}






