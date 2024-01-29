const ThreadRepository = require('../ThreadRepository');
const ThreadRepository = require('../ThreadRepository');

describe('ThreadRepository abstract', () => {
  it('should throw error when invoke abstract behavior', async () => {
    /**
     * @TODO 1
     * Lengkapi pengujian untuk `ThreadRepository` abstract
     * Pastikan semua fungsi yang ada di `ThreadRepository`
     * membangkitkan `Error` THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED
     *
     */

    const ThreadRepository = new ThreadRepository();
    await expect(ThreadRepository.addThread({})).rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(ThreadRepository.isThreadExist('')).rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(ThreadRepository.getThreadById('')).rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  });
});
