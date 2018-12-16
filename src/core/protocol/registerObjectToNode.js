dop.core.registerObjectToNode = function(node, object) {
    var object_id = dop.getObjectId(object),
        object_data

    if (dop.data.object[object_id] === undefined)
        dop.data.object[object_id] = {
            object: object,
            nodes_total: 0,
            node: {}
        }

    object_data = dop.data.object[object_id]

    if (object_data.node[node.token] === undefined) {
        object_data.nodes_total += 1
        object_data.node[node.token] = {
            subscriber: 0, // 0 or 1 || false true
            owner: 0, // object_id_owner || 0 === false
            version: 0, // incremental integer for new patches
            pending: [],
            applied_version: 0, // last patch version applied correctly
            applied: {}
        }
    }

    return object_data
}
