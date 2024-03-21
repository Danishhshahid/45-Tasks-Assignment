function sandwiches (...items: string[]){
    console.log(`making a sandwich from  there ingredients, ${items.join(',')}`);
    return sandwiches;
}
sandwiches("cheese",'bun','patty',);
sandwiches("mozrella cheese",'bun','patty');
sandwiches(" mozrella cheese",'bun','patty','latus');
