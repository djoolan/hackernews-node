function info() { 
    return `This is the API of a Hackernews Clone`
}

function feed(root, args, context, info) {
    console.log('feed')
    return context.prisma.links()
}

module.exports = {
    info,
    feed,
}