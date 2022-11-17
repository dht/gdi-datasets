import * as admin from 'firebase-admin';

admin.initializeApp();

const firestore = admin.firestore();

export const clear = async (nodeTypes: Record<string, NodeType>) => {
    console.time('clear');

    let bulkWriter = firestore.bulkWriter(),
        ref;

    for (let key of Object.keys(nodeTypes)) {
        switch (nodeTypes[key]) {
            case 'single':
                ref = firestore.collection('singles').doc(key);
                bulkWriter.delete(ref);
                break;
            case 'collection':
            case 'groupedList':
                ref = firestore.collection(key);
                const snapshot = await ref.get();
                snapshot.forEach((doc) => {
                    bulkWriter.delete(doc.ref);
                });
                break;
        }
    }

    await bulkWriter.close();

    console.timeEnd('clear');
};
