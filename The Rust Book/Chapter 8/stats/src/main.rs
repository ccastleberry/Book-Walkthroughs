use std::collections::HashMap;

fn main() {
    let mut list_of_int = vec![7, 5, 2, 4, 5, 3];

    print!("{:?}\n", list_of_int);

    // Sort the vec
    list_of_int.sort();

    print!("{:?}\n", list_of_int);

    let mut list_sum = 0;
    let mut count = 0;
    let mut mode_count = HashMap::new();
    for num in &list_of_int {
        list_sum += num;
        count += 1;
        let current_count = mode_count.entry(num).or_insert(0);
        *current_count += 1;
    }
    print!("{:?}\n", mode_count);
    let mean = list_sum as f64 / count as f64;
    print!("The sum: {}\n", list_sum);
    print!("The mean: {}\n", mean);
    let median: f64;
    if count % 2 == 0 {
        let first  = list_of_int[count / 2 - 1];
        let second = list_of_int[count / 2];
        median = (first + second) as f64 / 2.0;
    } else {
        median = list_of_int[count / 2] as f64;
    }
    print!("Median: {}\n", median);
    let mode = {
        mode_count
        .iter()
        .max_by(|a, b| a.1.cmp(&b.1))
        .map(|(k, _v)| k)
    };
    match mode {
        Some(final_mode) => {print!("Mode: {}\n", final_mode);},
        None => {}
    }
    
}
